class ChangeColumnImageToPost < ActiveRecord::Migration[5.0]
  def change
		change_column :posts, :image, :binary
  end
end
