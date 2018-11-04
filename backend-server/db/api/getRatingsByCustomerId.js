const getRatingsByCustomerId = async (db, id) => {
    try {
        let ref = db.collection("ratings");
        let query = await ref
            .where("customerId", "==", id)
            .orderBy("createdDate", "desc")
            .get();

        if (query.empty)
            return { message: "No ratings for that bartender found", success: false };

        let ratings = query.docs.map(doc => doc.data());

        return { ratings };
    } catch (error) {
        return { error, success: false };
    }
};

module.exports = getRatingsByCustomerId;
