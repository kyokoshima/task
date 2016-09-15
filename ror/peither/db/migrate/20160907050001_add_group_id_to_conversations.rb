class AddGroupIdToConversations < ActiveRecord::Migration[5.0]
  def change
		add_column :conversations, :group_id, :integer
  end
end
