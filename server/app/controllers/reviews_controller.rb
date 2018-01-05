class ReviewsController < ApplicationController

  def create
    review = Review.new(review_params)
    if review.save
      console.log("saved new review")
    else
      render json:review.errors.messages, status: 400
    end
  end


  private 

  def review_params
    params.require(:review).permit(:rating, :review, :show_flag, :course_id, :user_id)
  end
end
