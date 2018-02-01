// Node module imports needed to run the functions
require("dotenv").config();
var fs = require("fs"); //reads and writes files
var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var Spotify = require('node-spotify-api');
var userCommand = process.argv[2];

switch(userCommand){
    //use node liri.js my-tweets to:
    //show last 20 tweets with timestamp in bash window
    case 'my-tweets':
    break;
    //use node liri.js my-tweets to:
    //show last 20 tweets with timestamp in bash window
    case 'spotify-this-song':
    break;
    //use node liri.js my-tweets to:
    //show last 20 tweets with timestamp in bash window
    case 'movie-this':
    break;
    //use node liri.js my-tweets to:
    //show last 20 tweets with timestamp in bash window
    case 'do-what-it-says':
    break;
}

