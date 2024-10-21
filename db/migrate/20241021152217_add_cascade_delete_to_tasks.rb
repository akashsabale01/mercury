# frozen_string_literal: true

class AddCascadeDeleteToTasks < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :tasks, :users
    add_foreign_key :tasks, :users, column: :assigned_user_id, on_delete: :cascade
  end
end
