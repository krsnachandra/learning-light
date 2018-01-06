class UsersController < ApplicationController
  before_action :authenticate_user, only: [:index, :update]

  def index
    render json: current_user
  end

  def show
    @user = User.find params[:id]
    render json: @user.to_json(include: :user_sections)
  end

  def create
    user = User.new(user_params)
    if user.save
      token = Knock::AuthToken.new payload: {sub: user.id}
      render json:token
    else
      render json:user.errors.messages, status: 400
    end
  end

  def update
    @user = current_user
    @user.update_attributes(user_params)
  end


  private 

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :location, :motivation, :password, :password_confirmation)
  end

end
