class AddThumbnailToPosts < ActiveRecord::Migration[5.0]
  def change
		add_column :posts, :thumbnail, :binary
  end
end
