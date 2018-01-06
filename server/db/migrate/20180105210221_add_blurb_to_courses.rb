class AddBlurbToCourses < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :blurb, :string
  end
end
