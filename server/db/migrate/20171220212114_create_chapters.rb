class CreateChapters < ActiveRecord::Migration[5.1]
  def change
    create_table :chapters do |t|
      t.string :name
      t.integer :chapter_number
      t.references :course, foreign_key: true

      t.timestamps
    end
  end
end
