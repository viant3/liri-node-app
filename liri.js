require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');
var moment = require("moment");


var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var userInput = process.argv[3];

switch (action) {
    case "movie-this":
        movieInfo();
        break;
    case "concert-this":
        bandInfo();
        break;
    case "spotify-this-song":
        spotifyMe();
        break;
    default:
        break;
}

function movieInfo() {

    if(userInput === undefined){
        userInput = "Mr. Nobody";
        console.log(" If you havent watched " + userInput + " then you should: http://www.imdb.com/title/tt0485947/ \n It's on Netfilx!");
    }

    axios.get("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log(" Movie Title: " + response.data.Title, "\n",
                "Year movie was released: " + response.data.Year, "\n",
                "IMDB Rating: " + response.data.imdbRating, "\n",
                "Country of Movie Production: " + response.data.Country, "\n",
                "Movie Language: " + response.data.Language, "\n",
                "Movie Plot: " + response.data.Plot, "\n",
                "Movie Actors: " + response.data.Actors);

        });
}

function bandInfo() {
    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(
        function (response) {
            for (let i = 0; i < response.data.length; i++) {

                console.log("Artist: " + (response.data[i].lineup));
                console.log("Venue Name: " + (response.data[i].venue.name));
                console.log("Venue Location: " + (response.data[i].venue.city) + ", " + (response.data[i].venue.region) + ", " + (response.data[i].venue.country));
                console.log("Venue Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"), "\n");
                console.log("\n-------------------\n")
            }
        });
}

function spotifyMe() {
        if(userInput === undefined){
            userInput = "The Sign"
        }

    spotify
        .search({ type: 'track', query: userInput, limit: 10 })
        .then(function (response) {
         
            var songData = response.tracks.items;

            for (let i = 0; i < songData.length; i++) {
                console.log("Artist Name: " + (songData[i].artists[0].name));
                console.log("Song Name: " + (songData[i].name));
                console.log("Album Name: " + (songData[i].album.name));
                console.log("Song Preview: " + (songData[i].preview_url));
                console.log("\n----------------------------\n");
            }
        })
        .catch(function (err) {
            console.log(err);
        });

}

