Rails.application.routes.draw do
  root to: 'welcome#index'
  get '*path', to: 'welcome#index'
  resources :users
end
