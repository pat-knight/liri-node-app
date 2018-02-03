// Node module imports needed to run the functions
require("dotenv").config();
const fs = require("fs"); //reads and writes files
const request = require("request");
const keys = require("./keys.js");
const twitter = require("twitter");
const Spotify = require('node-spotify-api');
const bumper = "\n***********************************************\n "
const userCommand = process.argv[2];
const choices = "******************AVAILABLE COMMANDS******************"


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
    default:
        console.log(choices);
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
                console.log(`${bumper} Tweet: ${content} \n Time: ${stamp}`);


                fs.appendFile('log.txt', `${bumper} \n Tweet: ${content} \n Time: ${stamp}`, function (err) {
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
function spotify() {
    var client = new Spotify(keys.spotify);
    var song = process.argv[3];
    if (!song) {
        song = 'The Sign'
    }

    client.search({
        type: 'track',
        query: song
    }, function (err, data) {
        if (err) throw err;
        var curSong = data.tracks.items[0]; //current song based off user input
        var songName = song.toUpperCase();
        var album = curSong.album.name;
        var artist = curSong.album.artists[0].name;
        var sample = curSong.external_urls.spotify;

        console.log(`  
                        \n Artist: ${artist}
                        \n Song: ${song}
                        \n Album: ${album}
                        \n Preview: ${sample}
                        `);


    });
}

//use node liri.js movie-this '<movie name here>' to:
//display movie title/year/imdb rating/ rotten tomatoes rating/ country/ lang/ plot/ actors
function movie() {
    // fs.appendFile('log.txt', )
    var movie = process.argv[3];
    if(!movie){
        movie = 'mr nobody';
    }
    var request = require('request');
    var api = keys.omdb.key
    request.get(`http://www.omdbapi.com/?t="${movie}"&y=&plot=&apikey=${api}"`, function(err, response, body){
        // if (!err && response.statusCode == 200){
            if (err) throw err;
            var movieObject = JSON.parse(body);
            console.log(movieObject);
        }
    )
}

//use node liri.js do-what-it-says to:
//take text inside random.txt, using it to call from random.txt
// doWhat() {
//     fs.appendFile('log.txt')
// }