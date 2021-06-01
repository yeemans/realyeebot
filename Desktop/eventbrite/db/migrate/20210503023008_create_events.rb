class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    drop_table :events
    create_table :events do |t|
      t.string :location
      t.date :time
      t.text :description
      t.references :host, index: true, foreign_key: true
      t.timestamps
    end
  end
end
