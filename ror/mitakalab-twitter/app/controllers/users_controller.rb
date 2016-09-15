class UsersController < ApplicationController
  def index
		binding.pry
		@users = User.all
  end

  def show
    @user = User.find_by(:username => params[:username])
  end
end
