class Review

    attr_reader :viewer, :movie, :rating #might need to be accessor
    
    @@all = []

    def initialize(viewer, movie, rating)
        @viewer = viewer
        @movie = movie
        @rating = rating
        @@all << self
    end

    def self.all #all the instances of Reviews
        @@all
    end

end
