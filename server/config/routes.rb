# {id, coursename, title, description,
#  author, ratings, tags, …}


Rails.application.routes.draw do

  get 'courses', to: 'courses#index', as: :courses
  get ':coursename', to: 'courses#show', as: :coursename
  get ':coursename/:sectionname', to: 'sections#show', as: :sectionname

  resources :users, only: [:create, :new, :show]

end
