class CreateSections < ActiveRecord::Migration[5.1]
  def change
    create_table :sections do |t|
      t.string :name
      t.integer :section_number
      t.text :content
      t.references :chapter, foreign_key: true

      t.timestamps
    end
  end
end
