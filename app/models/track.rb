class Track < ActiveRecord::Base

  validates :name, :roll, presence: true
  validates :name, uniqueness: true

end
