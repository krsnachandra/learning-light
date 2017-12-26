class SectionsController < ApplicationController

  def show
    @section = Section.find_by_sectionname params[:sectionname]
    render json: @section
  end

end
