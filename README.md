# Mercury

- Mercury is Task Management Tool

## Demo
  Click on image to see Demo of Mercury webapp:

[![Mercury Demo](https://github.com/user-attachments/assets/8446eef3-7548-4c7d-9979-58603de62f98)](https://www.loom.com/share/86b46be6c65b4a36832b8e5282e6c533?sid=19af42b7-4e38-47cf-ba1b-4586e466c72a)

## Features

- User can create task & assign that to team members.
- Both Task Creator & assigned user can see pending & completed tasks
- Task Creator can perform CRUD operations on tasks
- Assigned User can Complete Task & Add Comments to respective task
- After task is finished, assigned user can mark it as complete
- User can pin any task to top
- Added Authentication, Authorization & respective endpoints like Login,
  Register
- Performed unit testing with comprehensive test coverage for models and controllers.

## Tech Stack

### Frontend

- ReactJS
- Tailwind CSS

### Backend

- Ruby on Rails
- Sqlite

## Run Backend Rails Server

`bundle exec rails server`

## Run Webpack for Frontend

`./bin/webpacker-dev-server`

## Running Both Frontend & Backend in single command using foreman

`foreman start`

 For running Both Frontend & Backend in single command using foreman
 add Foreman gem to global gem list **DO NOT ADD TO Gemfile of your project**, then create Procfile for foreman

 ```ruby
  # This is content of Procfile
  rails-api: bundle exec rails server -p 3000
  react-frontend: ./bin/webpacker-dev-server
 ```
