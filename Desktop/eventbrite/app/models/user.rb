class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable
         
    has_many :bookings, foreign_key: :attendee_id
    has_many :attended_events, through: :bookings
    has_many :hosted_events, foreign_key: :host_id, class_name: "Event"
    protected
    def password_required?
      confirmed? ? super : false
    end
    def email_required? 
      confirmed? ? super: false 
    end
end
