# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  constraints(lambda { |req| req.format == :json }) do
    resources :tasks, except: %i[new edit], param: :slug
    resources :users, only: %i[index create]
    resource :session, only: :create
  end

  # Defines the root path route ("/")
  root "home#index"

  # Note:
  # get "*path" is always placed at the end of the all routes defined in route.rb file
  # get "*path": It's a catch-all route to serve the React app for all undefined routes, allowing client-side navigation to work correctly in a SPA.
  get "*path", to: "home#index", via: :all
end
