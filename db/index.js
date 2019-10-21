const mongoose = require('mongoose');
const Randomly = require('./randomGenerate');

let mongodbUrl = "mongodb://localhost:27017/cr_database";
mongoose.connect(mongodbUrl, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
 
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
   console.log("Connection succeeded.");
});

let rv_schema = mongoose.Schema({
        movie_name: String,
        review: String,
        rate: String,
        rank: String,
        publication: String,
        date_post: String
});

let cr_schema = mongoose.Schema({
    user_name: String,
    user_photo: String, 
    user_page: String,
    reviews: rv_schema
});

let CReviews = mongoose.model('CReviews', rv_schema)
let CReview = mongoose.model('CReview', cr_schema);  

const saveCReviews = ((creviews) => {
    creviews.forEach( (review) => {
        let data = review.reviews.date_post || Randomly.RandomDate();
        let name = review.user_name || Randomly.RandomName();
        let rate = review.reviews.rate || Randomly.RandomRate();
        let movie = review.reviews.movie_name || Randomly.RandomMovie();
        let rank = review.reviews.rank || Randomly.RandomRank();
        let photo = review.user_photo || Randomly.RandomPhoto();
        let publication = review.reviews.publication || Randomly.RandomPublication();
        
        let crReviews = new CReviews({
                movie_name: movie,
                review: review.reviews.review,
                rate: rate,
                rank: rank,
                publication: publication,
                date_post: data                
        })

        let crReview = new CReview({
            user_name: name,
            user_photo: photo,
            user_page: review.user_page,
            reviews: crReviews
        });

        crReview.save((err) => {
            if (err) throw err;
            console.log("Success:",crReview);
        });
    });
});

const getCReviews = (callback) => {
    CReview.find({}).
        sort({"CReview.reviews.date_post": -1}).
        exec((err,results) => {
        if (err) callback(err, null);
        callback(null, results);
    });
}

module.exports = {
    CReview,
    saveCReviews,
    getCReviews,
};