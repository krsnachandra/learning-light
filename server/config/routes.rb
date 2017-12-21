# {id, coursename, title, description,
#  author, ratings, tags, …}


Rails.application.routes.draw do
  
  resources :courses, only: [:index, :show] do
    resources :sections, only: [:show]
  end

  resources :users, only: [:create, :new, :index]

end
