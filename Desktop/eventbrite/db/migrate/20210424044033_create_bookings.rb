class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.references :attendee, index: true, foreign_key: true
      t.references :attended_event, index: true, foreign_key: true
      t.timestamps
    end
  end
end
