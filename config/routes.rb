# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "home#index"

  resources :tasks, except: %i[new edit], param: :slug

  # Note:
  # get "*path" is always placed at the end of the all routes defined in route.rb file
  # get "*path": It's a catch-all route to serve the React app for all undefined routes, allowing client-side navigation to work correctly in a SPA.
  get "*path", to: "home#index", via: :all
end
