class PortfolioPiecesController < ApplicationController
  def index
  end

  def new
    @portfolio_piece = PortfolioPiece.new
  end
end