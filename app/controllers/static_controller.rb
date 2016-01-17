class StaticController < ApplicationController
  def index
    render 'layouts/application'
  end

  def index2
    render 'static/index'
  end
end