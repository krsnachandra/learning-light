class CreateInstructors < ActiveRecord::Migration[5.1]
  def change
    create_table :instructors do |t|
      t.string :name
      t.string :position
      t.text :description

      t.timestamps
    end
  end
end
