class Review < ApplicationRecord
  belongs_to :course
  belongs_to :user

  def with_user(user_id)
    {id: id, rating: rating, review: review, course_id: course_id, show_flag: show_flag, user: user}
  end
end
