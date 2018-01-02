# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171225235128) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chapters", force: :cascade do |t|
    t.string "name"
    t.integer "chapter_number"
    t.bigint "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_chapters_on_course_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.bigint "instructor_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "coursename"
    t.index ["instructor_id"], name: "index_courses_on_instructor_id"
  end

  create_table "instructors", force: :cascade do |t|
    t.string "name"
    t.string "position"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating"
    t.text "review"
    t.boolean "show_flag"
    t.bigint "course_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_reviews_on_course_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "sections", force: :cascade do |t|
    t.string "name"
    t.integer "section_number"
    t.text "content"
    t.bigint "chapter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "sectionname"
    t.index ["chapter_id"], name: "index_sections_on_chapter_id"
  end

  create_table "user_sections", force: :cascade do |t|
    t.bigint "section_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["section_id"], name: "index_user_sections_on_section_id"
    t.index ["user_id"], name: "index_user_sections_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "location"
    t.text "motivation"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "chapters", "courses"
  add_foreign_key "courses", "instructors"
  add_foreign_key "reviews", "courses"
  add_foreign_key "reviews", "users"
  add_foreign_key "sections", "chapters"
  add_foreign_key "user_sections", "sections"
  add_foreign_key "user_sections", "users"
end
