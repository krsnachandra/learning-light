class Section < ApplicationRecord
  belongs_to :chapter
  has_many :user_sections

end
