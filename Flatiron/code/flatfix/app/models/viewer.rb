class Viewer

  attr_accessor :username

  @@all = []

  def initialize(username)
    @username = username
    self.class.all << self
  end

  def self.all #all instances of Viewer
    @@all
  end

  def reviews #anney.reviews ====== []
    Review.all.select do |one_review|
    one_review.viewer == self
    end
  end

  def reviewed_movies #returns array of movie instances
    result = []
    Review.all.select do |one_review|
      if one_review.viewer == self
        result << one_review.movie
      end
    end
    result
  end

  def reviewed_movie?(movie) #lodr
    self.reviewed_movies.include?(movie)  # go thru all the movies I reviewed 
  end

  def self.rate_movie(movie, rating)
    Review.new(self, movie, rating)
  end
  
end
