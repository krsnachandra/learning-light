class User < ApplicationRecord
  has_secure_password
  validates_uniqueness_of :email
  
  has_many :user_sections
  has_many :reviews
  
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, :uniqueness => {:case_sensitive => false}
  validates :password, :presence => true,
                       :confirmation => true,
                       :length => {:minimum => 8},
                       :on => :create
  validates :password, :confirmation => true,
                       :length => {:minimum => 8},
                       :allow_blank => true,
                       :on => :update


  def self.authenticate_with_credentials(email, password)
    user = User.find_by_email(email)
    user && user.authenticate(password)
  end

  def dto
    {email: email, first_name: first_name, last_name: last_name, location: location, user_sections: user_sections}
  end
end
