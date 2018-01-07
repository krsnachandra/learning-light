class UserSectionsController < ApplicationController
  before_action :authenticate_user, only: [:create]

  def create
    @user = current_user
    user_section = @user.user_sections.new(user_section_params)
    if user_section.save
      # puts "saved new user_section"
    else
      render json:user_section.errors.messages, status: 400
    end
  end

  private 

  def user_section_params
    params.require(:user_section).permit(:section_id)
  end

end
