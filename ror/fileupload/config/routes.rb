Rails.application.routes.draw do
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	get "posts/:id/image" => "posts#image", as: :post_image
	get "posts/:id/thumbnail" => "posts#thumbnail", as: :post_thumbnail
end
