#!/usr/bin/env python
"""Fetch Google Scholar citation counts and write them to _data/citations.yml.

Reads the Scholar user id from _config.yml (`scholar_userid`). Adapted from the
al-folio upstream script. Run periodically via .github/workflows/update-citations.yml.
Note: Google Scholar has no official API; scholarly scrapes it and may hit rate
limits / CAPTCHA in CI. The committed _data/citations.yml keeps the site working
between successful runs.
"""

import os
import sys
from datetime import datetime

import yaml
from scholarly import scholarly


def load_scholar_user_id() -> str:
    config_file = "_config.yml"
    if not os.path.exists(config_file):
        print(f"Configuration file {config_file} not found.")
        sys.exit(1)
    try:
        with open(config_file, "r") as f:
            config = yaml.safe_load(f)
        scholar_user_id = config.get("scholar_userid")
        if not scholar_user_id:
            print("No 'scholar_userid' found in _config.yml.")
            sys.exit(1)
        return scholar_user_id
    except yaml.YAMLError as e:
        print(f"Error parsing {config_file}: {e}")
        sys.exit(1)


SCHOLAR_USER_ID: str = load_scholar_user_id()
OUTPUT_FILE: str = "_data/citations.yml"


def get_scholar_citations() -> None:
    print(f"Fetching citations for Google Scholar ID: {SCHOLAR_USER_ID}")
    today = datetime.now().strftime("%Y-%m-%d")

    existing_data = None
    if os.path.exists(OUTPUT_FILE):
        try:
            with open(OUTPUT_FILE, "r") as f:
                existing_data = yaml.safe_load(f)
            if (
                existing_data
                and existing_data.get("metadata", {}).get("last_updated") == today
            ):
                print("Citations data already up-to-date today. Skipping fetch.")
                return
        except Exception as e:
            print(f"Warning: could not read {OUTPUT_FILE}: {e}")

    citation_data = {"metadata": {"last_updated": today}, "papers": {}}

    scholarly.set_timeout(15)
    scholarly.set_retries(3)
    try:
        author = scholarly.search_author_id(SCHOLAR_USER_ID)
        author_data = scholarly.fill(author)
    except Exception as e:
        print(f"Error fetching author data from Google Scholar: {e}")
        sys.exit(1)

    for pub in author_data.get("publications", []):
        try:
            pub_id = pub.get("pub_id") or pub.get("author_pub_id")
            if not pub_id:
                continue
            bib = pub.get("bib", {})
            citation_data["papers"][pub_id] = {
                "title": bib.get("title", "Unknown Title"),
                "year": bib.get("pub_year", "Unknown Year"),
                "citations": pub.get("num_citations", 0),
            }
            print(f"Found: {bib.get('title')} - {pub.get('num_citations', 0)} citations")
        except Exception as e:
            print(f"Error processing a publication: {e}")

    if existing_data and existing_data.get("papers") == citation_data["papers"]:
        print("No changes in citation data. Skipping file update.")
        return

    with open(OUTPUT_FILE, "w") as f:
        yaml.dump(citation_data, f, width=1000, sort_keys=True, allow_unicode=True)
    print(f"Citation data saved to {OUTPUT_FILE}")


if __name__ == "__main__":
    get_scholar_citations()
