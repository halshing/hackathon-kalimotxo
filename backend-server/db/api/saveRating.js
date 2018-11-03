const getRatings = require("./getRatingsByBartenderId");
const userProfile = require("./updateUserProfile");

const saveRating = async (db, data) => {
  try {
    // clean up data
    data.rating = parseInt(data.rating);
    data = { ...data, createdDate: new Date().getTime() };
    
    // add the customer rating to the database
    let newRating = await db.collection("ratings").add(data);
    
    // get the ratings for the bartender
    let ratings = await getRatings(db, data.bartenderId);
    if (ratings.success === false) ratings = { ratings: [] };
    
    // calculate the overall rating for the bartender
    let overallRating = calcAverageRating(ratings);    
    overallRating = overallRating ? parseInt(overallRating) : null;
    
    // update the bartenders profile (by id)
    await userProfile(db, { userId: data.bartenderId, overallRating });
    
    // return the customer rating with the new entry id
    return { ...data, ratingId: newRating.id };
  } catch (error) {
    return { error };
  }
};

const calcAverageRating = ({ ratings }) => {
  if (ratings.length < 1) return null;
  return (
    ratings.reduce((acc, val) => acc + parseInt(val.rating), 0) / ratings.length
  );
};

module.exports = saveRating;
