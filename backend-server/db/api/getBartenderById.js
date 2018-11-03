const { UserId, UserType } = require("../../constants/FieldNames");
const getRatings = require("./getRatingsByBartenderId");

const getBartenderById = async (db, id) => {
  try {
    console.log(1);
    if (!id)
      return {
        error: "No UserID provided. Please provide a valid UserID.",
        success: false
      };
    let ref = db.collection("users");
    let query = await ref
      .where(UserId, "==", id)
      .where(UserType, "==", "bartender")
      .limit(1)
      .get();
    console.log(2);
    if (query.empty)
      return { message: "No bartender was found!", success: false };
    console.log(3);
    // get the ratings for the bartender
    let ratings = await getRatings(db, id);
    if (ratings.success === false) ratings = { ratings: [] };
    console.log(4, ratings);
    // calculate the overall rating for the bartender
    let overallRating = calcAverageRating(ratings);
    console.log(5);
    let user = { ...query.docs[0].data(), overallRating };
    console.log(6);
    return { user, ...ratings };
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

module.exports = getBartenderById;
