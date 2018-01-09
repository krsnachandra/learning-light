class Chapter < ApplicationRecord
  belongs_to :course
  has_many :sections

  def for_user(user_id)
    {name: name, chapter_number: chapter_number, course_id: course_id, sections: sections_for_user(user_id), id: id}
  end

  def sections_for_user(user_id)
    sections.to_a.map { |s| s.for_user(user_id) }
  end
end
