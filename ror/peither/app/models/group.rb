class Group < ApplicationRecord
	has_many :conversations, dependent: :destroy
end
