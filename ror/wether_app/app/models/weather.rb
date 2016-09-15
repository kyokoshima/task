class Weather < ApplicationRecord
  def self.apidate
    uri = URI.parse("http://api.openweathermap.org/data/2.5/forecast/city")
    json = Net::HTTP.get(uri + "?q=Cebu&APPID=317b5b5a2c782dd1b7aab1c82867e90c")
    JSON.parse(json)
  end
end
