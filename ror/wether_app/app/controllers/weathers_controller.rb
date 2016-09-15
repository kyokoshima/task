class WeathersController < ApplicationController
	def index
		@weather = Weather.apidate
	end
end
