class CreateRubygems < ActiveRecord::Migration
  def change
    create_table :rubygems do |t|
      t.string :name
      t.string :usage
      t.string :url
      t.text :description

      t.timestamps null: false
    end
  end
end
