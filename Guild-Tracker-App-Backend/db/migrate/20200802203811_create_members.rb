class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.string :name
      t.string :klass
      t.string :race
      t.integer :level
      t.string :rank

      t.timestamps
    end
  end
end
