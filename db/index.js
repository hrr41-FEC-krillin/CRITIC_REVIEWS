const mongoose = require('mongoose');
const Randomly = require('./randomGenerate');

const mongodbUrl = 'mongodb://localhost:27017/cr_database';
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection err'));
db.once('open', () => {
  'Connection succeeded.';
});

const rvSchema = mongoose.Schema({
  movie_name: String,
  review: String,
  rate: String,
  rank: String,
  publication: String,
  date_post: String,
});

const crSchema = mongoose.Schema({
  user_name: String,
  user_photo: String,
  user_page: String,
  reviews: rvSchema,
});

const CReviews = mongoose.model('CReviews', rvSchema);
const CReview = mongoose.model('CReview', crSchema);

const saveCReviews = ((creviews) => {
  creviews.forEach((review) => {
    const data = review.reviews.date_post || Randomly.RandomDate();
    const name = review.user_name || Randomly.RandomName();
    const rate = review.reviews.rate || Randomly.RandomRate();
    const movie = review.reviews.movie_name || Randomly.RandomMovie();
    const rank = review.reviews.rank || Randomly.RandomRank();
    const photo = review.user_photo || Randomly.RandomPhoto();
    const publication = review.reviews.publication || Randomly.RandomPublication();

    const crReviews = new CReviews({
      movie_name: movie,
      review: review.reviews.review,
      rate,
      rank,
      publication,
      date_post: data,
    });

    const crReview = new CReview({
      user_name: name,
      user_photo: photo,
      user_page: review.user_page,
      reviews: crReviews,
    });

    crReview.save((err) => {
      if (err) throw err;
    });
  });
});

const getCReviews = (callback) => {
  CReview.find({})
    .sort({ 'CReview.reviews.date_post': -1 })
    .exec((err, results) => {
      if (err) callback(err, null);
      callback(null, results);
    });
};

module.exports = {
  CReview,
  saveCReviews,
  getCReviews,
};
