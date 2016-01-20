require 'rails_helper'

describe Article, :type => :model do
  it 'is valid with a title, text and description' do
    article = Article.new(
        title: 'Test article',
        description: "This is a test",
        text: "Here is some text.")
    expect(article).to be_valid
  end

  it 'is invalid without a title' do
    article = Article.new(title: nil)
    article.valid?
    expect(article.errors[:title]).to include("can't be blank")
  end

  it 'is invalid without a description' do
    article = Article.new(description: nil)
    article.valid?
    expect(article.errors[:description]).to include("can't be blank")
  end

  it 'is invalid without text' do
    article = Article.new(text: nil)
    article.valid?
    expect(article.errors[:text]).to include("can't be blanks")
  end
end