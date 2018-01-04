class Course < ApplicationRecord
  belongs_to :instructor
  has_many :chapters
  has_many :reviews
end
