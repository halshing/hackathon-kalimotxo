const updateUserProfile = async (db, data) => {
  try {
    if (!data.userId)
      return {
        error: "No UserID provided. Please provide a valid UserID.",
        success: false
      };
      
    let ref = db.doc(`users/${data.userId}`);
    
    delete data.email;
    delete data.password;
    delete data.userId;
    delete data.avatarUrl;
    
    if (data.hasOwnProperty("userType"))
      data.userType = data.userType.toLowerCase();
    
    await ref.set(data, { merge: true });
    
    return data;
  } catch (error) {
    return { error };
  }
};

module.exports = updateUserProfile;
