class Section < ApplicationRecord
  belongs_to :chapter
  has_many :user_sections
  
  def next_section_id
    chapter.course.sections.where('"sections".id > ?', id).minimum('"sections".id')
  end

  def next_section
    if next_section_id.nil?
      'complete'
    else
      chapter.course.sections.find(next_section_id).sectionname
    end
  end
end
