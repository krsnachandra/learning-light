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

  def for_user(user_id)
    {
      id: id, name: name, next_section: next_section, sectionname: sectionname, content: content, section_number: section_number, 
      completed: user_sections.exists?({user_id: user_id})
    }
  end
end
