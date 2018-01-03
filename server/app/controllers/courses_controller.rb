class CoursesController < ApplicationController

    def index
        @courses = Course.all.order(id: :asc)
        render json: @courses.to_json(include: :instructor)
    end

    def show
        @course = Course.find_by_coursename params[:coursename]
        render json: @course.to_json(include: [:instructor, :reviews, {chapters: {include: :sections}}])
    end

end
