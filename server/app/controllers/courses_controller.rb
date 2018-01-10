class CoursesController < ApplicationController
    
  def index
    @courses = Course.all.order(id: :asc)
    p current_user
    if current_user.nil?
      render json: @courses.to_json(include: [:instructor, :reviews, :sections])
    else
      courses_for_user = @courses.to_a.map { |c| c.for_user(current_user.id) }
      render json: courses_for_user.to_json
    end
  end

  def show
    @course = Course.find_by_coursename params[:coursename]
    if current_user.nil?
      render json: @course.to_json(include: [:instructor, {reviews: {include: :user}}, {
        chapters: {include: {sections: {methods: :next_section}}}}])
    else
      course_for_user = @course.for_user(current_user.id)
      render json: course_for_user.to_json
    end
  end

end
