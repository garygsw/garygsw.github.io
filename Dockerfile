# Development image for building the al-folio site on a pinned Ruby.
#
# Rationale: newer host Rubies (e.g. Ruby 4.0) dropped several libraries from
# the default gem set (ostruct, bigdecimal, ...), which breaks the legacy plugin
# chain. Pinning Ruby 3.2 here gives a reliable local build/serve regardless of
# the host toolchain. Deployment still happens via GitHub Actions.
FROM ruby:3.2

RUN apt-get update && apt-get install -y --no-install-recommends \
      build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

COPY Gemfile ./
RUN gem install bundler && bundle install

EXPOSE 4000 35729

CMD ["bundle", "exec", "jekyll", "serve", \
     "--host", "0.0.0.0", "--livereload", "--force_polling", "--watch"]
