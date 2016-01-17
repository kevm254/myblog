class Article < ActiveRecord::Base
  ### ASSOCIATIONS ####
  has_many :comments, dependent: :destroy
  belongs_to :user

  ### VALIDATIONS ####
  validates :title, presence: true, length: { minimum: 5 }


  ### UTILITY METHODS ####
  def created_at_f
    "Created on: #{created_at.strftime('%m/%d/%y')}"

  end
end
