source 'https://rubygems.org'

group :jekyll_plugins do
    gem 'jekyll'
    gem 'jekyll-email-protect'
    gem 'jekyll-feed'
    gem 'jekyll-github-metadata'
    gem 'jekyll-jupyter-notebook'
    gem 'jekyll-paginate-v2'
    gem 'jekyll-scholar'
    gem 'jekyll-twitter-plugin'
    gem 'jekyll-sitemap'
    gem 'jekyll-seo-tag'
    gem 'jekyll-target-blank'
    gem 'jemoji'
    gem 'unicode_utils'
    gem 'webrick'
end

# Ruby 4.0 removed these from the default gem set. Listing them explicitly keeps
# the build working on Ruby 4.x while remaining harmless on Ruby 3.2 (where they
# are still available as gems). The Docker image pins Ruby 3.2, so this is only
# load-bearing for local builds on a newer host Ruby.
gem 'ostruct'
gem 'bigdecimal'
gem 'csv'
gem 'logger'
gem 'faraday-retry'
