# frozen_string_literal: true

class TaskPolicy
  attr_reader :user, :task

  def initialize(user, task)
    @user = user
    @task = task
  end

  def show?
    # puts "#{task.task_owner_id} #{task.assigned_user_id} #{user.id}"
    puts "----------------------------------------"
    puts "Policy Show Debugging Information"
    puts "----------------------------------------"
    puts "Assigned User ID: #{@task.assigned_user_id}" # Example: 1
    puts "Task Owner ID: #{@task.task_owner_id}" # Example: 4
    puts "Current User ID: #{user.id}" # Example: 1
    puts "Is Current User the Task Owner? #{task.task_owner_id == user.id}"
    puts "Is Current User the Assigned User? #{task.assigned_user_id == user.id}"
    puts "----------------------------------------"

    task.task_owner_id == user.id || task.assigned_user_id == user.id
  end

  def edit?
    show?
  end

  def update?
    # task.task_owner_id == user.id
    show?
    # Note
    # Here we use show? (means both task creator & assignee can update non-restricted fields task like mark task as complete) instead of allowing only task creator to update those non-restricted  fields
    # RESTRICTED_ATTRIBUTES are defined in task model
    # RESTRICTED_ATTRIBUTES = %i[title task_owner_id assigned_user_id]
    #
    # ensure_authorized_update_to_restricted_attrs method in tasks_controller to restrict user from
    # updating restricted attributes
  end

  # Every user can create a task, hence create? will always returns true.
  def create?
    true
  end

  def destroy?
    task.task_owner_id == user.id
  end

  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      scope.where(task_owner_id: user.id).or(scope.where(assigned_user_id: user.id))
    end
  end
end
