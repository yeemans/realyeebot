Rails.application.routes.draw do

  root 'users#new'
  devise_for :users
  resources :users, only: [:new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
