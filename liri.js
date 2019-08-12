// require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var inquirer = require("inquirer");




// var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var userInput = process.argv[3];

switch (action) {
    case "movie-this":
          movieInfo();
    break;
    case "concert-this":
          bandInfo();
     break;
    default:
        break;
}

function movieInfo() {

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
            console.log(response);
        });
}