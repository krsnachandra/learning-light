class Course < ApplicationRecord
  belongs_to :instructor
  has_many :chapters
  has_many :sections, through: :chapters
  has_many :all_reviews, class_name: 'Review'

  def reviews
    all_reviews.where({show_flag: true})
  end
  
  def for_user(user_id)
    sections = sections_for_user(user_id)
    p sections
    section_count = sections.count
    completion = section_count == 0 ? 0 : ((sections.count { |s| s[:completed] == true }) / section_count)
    {
      name: name, id: id, description: description, instructor: instructor, 
      reviews: reviews.to_a.map { |r| r.with_user(user_id) }, 
      chapters: chapters_for_user(user_id), coursename: coursename, blurb: blurb,
      sections: sections,
      completion: completion
    }
  end

  def sections_for_user(user_id)
    sections.to_a.map { |s| s.for_user(user_id) }
  end

  def chapters_for_user(user_id)
    chapters.to_a.map { |c| c.for_user(user_id) }
  end
end
