Rails.application.routes.draw do
  resources :articles do
    resources :comments
  end
  root 'static#index'

  get '/static/show', to: 'static#show'
end