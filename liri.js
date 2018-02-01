// Node module imports needed to run the functions
require("dotenv").config();
const fs = require("fs"); //reads and writes files
const request = require("request");
const keys = require("./keys.js");
const twitter = require("twitter");
const Spotify = require('node-spotify-api');
const userCommand = process.argv[2];

switch (userCommand) {
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
function tweets() {
    var client = new twitter(keys.twitter);
    var tweets = {
        user_id: 958856873649811459,
        count: 5
    };

    client.get('statuses/user_timeline', (err, tweets, response) => {
        if (err) throw err;
        // console.log(response);
        var tweetLog =
            tweets.forEach(function (element) {
                var content = element.text;
                var stamp = element.created_at
                // console.log(`\n Tweet: ${element.text} \n Time: ${element.created_at}`);
                console.log(`\n Tweet: ${content} \n Time: ${stamp}`)
                
                
                fs.appendFile('log.txt', `\n Tweet: ${content} \n Time: ${stamp}`, function (err) {
                    if (err) throw err;

                    else {
                        console.log("Content Added!");
                    }

                });
            });
    })
};

//use node liri.js spotify-this-song '<song name here>' to:
//show artist/name/preview link/ album
spotify => {

};

//use node liri.js movie-this '<movie name here>' to:
//display movie title/year/imdb rating/ rotten tomatoes rating/ country/ lang/ plot/ actors
movie => {

};

//use node liri.js do-what-it-says to:
//take text inside random.txt, using it to call from random.txt
doWhat => {

};