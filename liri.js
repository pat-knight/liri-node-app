// Node module imports needed to run the functions
require("dotenv").config();
const fs = require("fs"); //reads and writes files
const request = require("request");
const keys = require("./keys.js");
const twitter = require("twitter");
const Spotify = require('node-spotify-api');
const userCommand = process.argv[2];

switch(userCommand){
    case 'my-tweets':
        tweets();
    break;
    
    case 'spotify-this-song':
        spotify();
    break;
    
    case 'movie-this':
        movie();
    break;
    
    case 'do-what-it-says':
        doWhat();
    break;
}

//use node liri.js my-tweets to:
//show last 20 tweets with timestamp in bash window
tweets =>{
    var client = new twitter(twitter.keys);
    var tweets = {
        user_id: webdevpat,
        count: 20
    };

    client.get('statuses/user_timeline', (err, tweets, data) =>{
        if (err) {throw err};
        console.log(data);
    })
};

//use node liri.js spotify-this-song '<song name here>' to:
//show artist/name/preview link/ album
spotify =>{

};

//use node liri.js movie-this '<movie name here>' to:
//display movie title/year/imdb rating/ rotten tomatoes rating/ country/ lang/ plot/ actors
movie =>{

};

//use node liri.js do-what-it-says to:
//take text inside random.txt, using it to call from random.txt
doWhat =>{

};