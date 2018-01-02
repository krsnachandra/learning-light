# {id, coursename, title, description,
#  author, ratings, tags, …}


Rails.application.routes.draw do

  resources :users, only: [:index, :create, :show]

  get 'courses', to: 'courses#index', as: :courses
  get ':coursename', to: 'courses#show', as: :coursename
  get ':coursename/:sectionname', to: 'sections#show', as: :sectionname

end
