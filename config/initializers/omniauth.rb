Rails.application.config.middleware.use OmniAuth::Builder do
  if ENV['Q2sqL3uNuWhCMZcIWByHQ'].blank? || ENV['m8Tbrip1k4V1o0JA4CZXyyEh9TatYMJNeMSIHoHa4n0'].blank?
    warn "*" * 80
    warn "WARNING: Missing consumer key or secret. First, register an app with Twitter at"
    warn "https://dev.twitter.com/apps to obtain OAuth credentials. Then, start the server"
    warn "with the command: CONSUMER_KEY=abc CONSUMER_SECRET=123 rails server"
    warn "*" * 80
  else
    provider :twitter, ENV['Q2sqL3uNuWhCMZcIWByHQ'], ENV['m8Tbrip1k4V1o0JA4CZXyyEh9TatYMJNeMSIHoHa4n0']
  end
end
