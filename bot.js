var twit   = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

var retweet = function () {
    var params = {
        q: '#dem2020',
        result_type: 'recent',
        lang: 'en'
    }

    Twitter.get('search/tweets', params, function(err, data){
        if (!err){
            retweetId = data.statuses[0].id_str;

            Twitter.post('statuses/retweet/:id', {
                id: retweetId
            },
            function (err, response){
                if (response){
                    console.log('Retweeted!')
                }

                if (err){
                    console.log('Something went wrong while trying to RETWEET...'+ err)
                }
            });
        }
        else {
            console.log('Something went wrong while SEARCHING...')
        }
    })
}
// grab & retweet as soon as program is running...
retweet();
// retweet in every 50 minutes
setInterval(retweet, 3000000);

    //setInterval(retweet, 180000)
//     var favoriteTweet = function() {
//         var params= {
//             q: '@therealdonaldtrump',
//             result_type: 'resent',
//             lang: 'en'
//         }
//     }

//     Twitter.get('search/tweets', params, function(err, data) {
        
//         var tweets = data.statuses;
//         var randomTweet = ranDom(tweet); 

//         if (typeof randomTweet != 'undefined'){
//             Twitter.post('favorites.create', {id: randomTweet.id_str, function (err, data){
//                 if (err){
//                     console.log('ERROR: unable to favorite')
//                 }
//                 else{
//                     console.log('SUCCESS: tweet favorited')
//                 }
//             }
//         });
//         }
        
//     });
// }
// // grab & 'favorite' as soon as program is running...
// favoriteTweet();
// // 'favorite' a tweet in every 60 minutes
// setInterval(favoriteTweet, 180000);



// function ranDom(arr){
//     var index = Math.floor(Math.random()*arr.length);
//     return arr[index];
// 