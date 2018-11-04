const getCustomerRatings = require("./getRatingsByCustomerId");
const getCustomerById = async (db, id) => {
  try {
    if (!id)
      return {
        error: "No UserID provided. Please provide a valid UserID.",
        success: false
      };

    let ref = db.doc(`users/${id}`);

    let user = await ref.get();
    
    if (!user.exists) return { message: "User does not exist!" };
    
    let ratings = await getCustomerRatings(db, id);
    
    if (ratings.success === false) ratings = { ratings: [] };
    
    return { user: user.data(), ...ratings };
  } catch (error) {
    return { error };
  }
};

module.exports = getCustomerById;
