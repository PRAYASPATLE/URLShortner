// export const sessionIdToUserMap = new Map();

// export const setUser = (id, user) => {
//   sessionIdToUserMap.set(id, user);
// };

// export const getUser = (id) => {
//   sessionIdToUserMap.get(id);
// };

import jwt from "jsonwebtoken";
const secret = "Prayas5#@";

export const setUser = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
};

export const getUser = (token) => {
  try {
    return jwt.sign(token, secret);
  } catch (error) {
    return null;
  }
};
