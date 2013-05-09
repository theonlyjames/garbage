class ApplicationController < ActionController::Base
  protect_from_forgery

  private

  def client
    Twitter.configure do |config|
      config.consumer_key = ENV['Q2sqL3uNuWhCMZcIWByHQ']
      config.consumer_secret = ENV['m8Tbrip1k4V1o0JA4CZXyyEh9TatYMJNeMSIHoHa4n0']
      config.oauth_token = session['625027245-J7jRwl4SkGo29dkoqjtaoVyuMiQf6eHb1Xn6pEzP']
      config.oauth_token_secret = session['xVoPT3inx3Ua3sbXQmQ9yh62nSBOylcrMuwL7gbOO6o']
    end
  end

end
