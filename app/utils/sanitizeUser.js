// utils/sanitizeUser.js
module.exports = function sanitizeUser(user) {
  if (!user) return user;
  const userObj = user.toObject ? user.toObject() : user;
  delete userObj.password;
  return userObj;
};
