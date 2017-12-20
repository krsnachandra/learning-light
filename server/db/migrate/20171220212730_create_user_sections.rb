class CreateUserSections < ActiveRecord::Migration[5.1]
  def change
    create_table :user_sections do |t|
      t.references :section, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
