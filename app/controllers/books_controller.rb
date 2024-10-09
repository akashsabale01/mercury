class BooksController < ApplicationController
  def list
     b_id = params[:id]
     puts b_id
  end
end
