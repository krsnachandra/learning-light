# {id, coursename, title, description,
#  author, ratings, tags, …}


Rails.application.routes.draw do
  root to:'courses#index'

  resources :courses, only: [:index, :show] do
    resources :sections, only: [:show]
  end


end
