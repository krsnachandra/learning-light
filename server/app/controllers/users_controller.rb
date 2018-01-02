class UsersController < ApplicationController

  def index
    render json: current_user
  end

  def show
    @user = User.find params[:id]
    render json: @user.to_json(include: :user_sections)
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

  private 

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
