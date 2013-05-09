source 'https://rubygems.org'
ruby '1.9.2'

gem 'rails', '~> 3.2.2'

gem 'haml'
gem 'omniauth'
gem 'omniauth-twitter'
gem 'twitter'
gem 'twitter-text'

group :assets do
  gem 'sass-rails'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier'
end

gem 'jquery-rails'
gem 'backbone-rails', git: 'https://github.com/rubymaverick/backbone-rails.git'

group :development, :test do
  gem 'sqlite3'
end

group :production do
  gem 'puma'
  gem 'pg'
end

group :test do
  gem 'coveralls', :require => false
  gem 'mocha', :require => false
  gem 'simplecov', :require => false
  gem 'webmock'
end
