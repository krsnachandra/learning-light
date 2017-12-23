class AddCoursenameToCourses < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :coursename, :string
  end
end
