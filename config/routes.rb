Rails.application.routes.draw do
  devise_for :profiles
  resources :articles do
    resources :comments
  end

  resources :portfolio_pieces

  root 'static#index2'

  get 'api/articles', to: 'articles_api#index'

  get '/static/list', to: 'static#list'
  get '/static/show', to: 'static#show'
end