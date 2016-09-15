class CreateWords < ActiveRecord::Migration[5.0]
  def change
    create_table :words do |t|
      t.string :line
      t.string :photo
      t.string :title
      t.string :person

      t.timestamps
    end
  end
end
