class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    drop_table :users
    create_table :users do |t|
      t.string :name 
      t.timestamps
    end
  end
end
