class Event < ApplicationRecord 
    has_many :bookings, foreign_key: :attended_event
    has_many :attendees, through: :bookings, source: :attendee
    belongs_to :host, class_name: "User"

end