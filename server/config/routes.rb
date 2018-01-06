# {id, coursename, title, description,
#  author, ratings, tags, …}


Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  resources :users, only: [:index, :create, :show]
  resources :reviews, only: [:create]
  put 'users' => 'users#update'
  get 'courses', to: 'courses#index', as: :courses
  get ':coursename', to: 'courses#show', as: :coursename
  get ':coursename/:sectionname', to: 'sections#show', as: :sectionname

end
