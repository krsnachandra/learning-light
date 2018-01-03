class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :coursename
      t.text :description
      t.references :instructor, foreign_key: true

      t.timestamps
    end
  end
end
