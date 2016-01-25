class Article < ActiveRecord::Base
  ### ASSOCIATIONS ####
  has_many :comments, dependent: :destroy
  belongs_to :user

  ##### VALIDATIONS ####
  ### ENSURES PRESENCE
  validates :title, presence: true


  ### ENSURES RANGE
  validates :title, length: { minimum: 5 }

  ### UTILITY METHODS ####
  def created_at_f
    created_at.strftime('%m/%d/%y')
  end
end
