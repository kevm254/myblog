Rails.application.routes.draw do
  resources :articles do
    resources :comments
  end
  root 'static#index'

  get '/static/list', to: 'static#list'
  get '/static/show', to: 'static#show'
end