class CoursesController < ApplicationController

    def index
        @courses = Course.all.order(id: :asc)
        render json: @courses.to_json(include: :instructor)
    end

end
