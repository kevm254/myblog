class CreatePortfolioPieces < ActiveRecord::Migration
  def change
    create_table :portfolio_pieces do |t|
      t.string :site_name
      t.string :site_link
      t.string :github_link
      t.text :description

      t.timestamps null: false
    end
  end
end
