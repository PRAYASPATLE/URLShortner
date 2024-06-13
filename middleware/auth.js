import { getUser } from "../service/auth.js";
// import { sessionIdToUserMap } from "../service/auth.js";

export const restrictToLoggedinUserOnly = (req, res, next) => {
  const useruid = req.cookies.uuid;
  // const user = sessionIdToUserMap.get(useruid)
  const user = getUser(useruid);

  if (!useruid && !user) {
    return res.redirect("/views/login");
  }
   
  req.user = user;
  
  next();
};

export const checkAuth = (req, res, next) => {
  const useruid = req.cookies?.uuid;
  // const user = sessionIdToUserMap.get(useruid)
  const user = getUser(useruid);
  req.user = user;

  next();
  
};
