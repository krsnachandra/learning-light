class AddSectionnameToSections < ActiveRecord::Migration[5.1]
  def change
    add_column :sections, :sectionname, :string
  end
end
