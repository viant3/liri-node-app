# LIRI


LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI uses the following commands:
        *	movie-this
        *	concert-this
        *	spotify-this-song
        *	do-what-it-says

## Technologies used:
        *	Node.js
        *	Javascript
        *	npm
        *	axios
        *	dotenv
        *	fs
        *	moment.js
        *	node-spotify-api

## API’s Searched:
        *	Spotify
        *	Bands In Town
        *	Omdb

## How to Run LIRI

**For Movie Information from OMDB:**

 At the command line in bash, type
	 
          *node liri.js movie-this “enter a movie you wish to search within quotes”*
        
 This will output the following information to your terminal/bash window. 
 
                *	Movie Title
                *	Year movie was released
                *	IMDB Rating of the movie.
                *	Country where the movie was produced
                *	Movie Language
                *	Plot of the movie.
                *	Actors in the movie.
                *	Rotten Tomatoes Rating
                
               
![movie info](/images/movie.jpg)




If no movie is entered, the information for the default movie “Mr. Nobody” will be displayed.
 

![no movie info](/images/nomovie.jpg)

**For Artist Concert Venue Dates and Locations from Bands In Town:**

At the command line in bash, type

	        *node liri.js concert-this “enter an artist you wish to search for within quotes”*
  
This will search the Bands in Town Artist Events API and output the following information to your terminal/bash window. 

                *	Artist name searched
                *	Name of the venue
                *	Venue location
                *	Date of the Event 
 
![concert info](/images/concert.jpg)

**For Spotify Song information:**

At the command line in bash, type

	        *node liri.js  spotify-this-song  “enter a song you wish to search for here”*
  
This will search the Spotify API and output the top 3 results to your terminal/bash window.  They will be formatted as follows:

                *	Artist Name
                *	Song Name
                *	Album Name
                *	Song Preview URL

![spotify info](/images/spotify.jpg)


**Do what it says:**

At the command line in bash, if you type

	        *node liri.js do-what-it-says*
  
LIRI will read a string of text from a file named random.txt, format the data, and run it as a command in bash. 
 
![do what it says](/images/dowhat.jpg)


All search results are being saved to a text file named log.txt.
 
![log info](/images/log.jpg)
