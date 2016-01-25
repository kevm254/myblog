class PortfolioPiecesController < ApplicationController
  def index
    @portfolio = PortfolioPiece.all
  end

  def new
    @portfolio_piece = PortfolioPiece.new
  end

  def create
    @portfolio_piece = PortfolioPiece.new(portfolio_params)
    if @portfolio_piece.save
      flash[:success] = "The operation was successful"
      redirect_to portfolio_pieces_path
    else
      flash[:danger] = "Unable to create the element!"
      render :new
    end
  end

  private
  def portfolio_params
    params.require(:portfolio_piece).permit(:site_name, :site_link, :github_link, :description)
  end
end