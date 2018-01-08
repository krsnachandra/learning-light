class Course < ApplicationRecord
  belongs_to :instructor
  has_many :chapters
  has_many :all_reviews, class_name: 'Review'

  def reviews
    all_reviews.where({show_flag: true})
  end
end
