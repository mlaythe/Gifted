Rails.application.routes.draw do
  root to: 'welcome#index'
  post '/signup', to: 'users#create'
  get '*path', to: 'welcome#index'
end
