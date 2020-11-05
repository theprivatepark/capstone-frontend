class Movie
  attr_accessor :title

  @@all = []

  def initialize(title)
    @title = title
    self.class.all << self
  end

  def self.all #all the instances of a movie
    @@all
  end

  def reviews # all the reviews associated with this movie
    Review.all.select do |one_review| 
      one_review.movie == self
    end 
    # Review.all.select {|one_review| one_review.movie == self}.map {|another_movie| another_movie}
  end

  def reviewers # who reviewed this movie? []
    results = []
    Review.all.select do |one_review|
      if one_review.movie == self
        results << one_review.viewer
      end
    end
    results
  end

  def average_rating
    all_ratings = self.reviews.map {|review| review.rating}
    all_ratings.sum / all_ratings.length 
  end

  def self.highest_rated #Movie.highest_rated  ==== 
    self.all.map.max_by {|movie| movie.average_rating} #array of movies
    # have a default movie with the highest rating
    # update the highest rating movie if there is a movie with a higher rating
    # i have the average rating for all the movies in #average_rating
  end

end