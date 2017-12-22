class UsersController < ApplicationController
  
  def show
    @user = User.find params[:id]
    render json: @user.to_json(include: :user_sections)
  end
  
  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/'
    else
      redirect_to '/users/new'
    end
  end
end
