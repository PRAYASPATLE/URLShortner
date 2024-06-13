import shortid from "shortid";
import URL from "../models/url.js";

export const handlegeneratenewshortURL = async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }
  console.log(req.user._id);
  const shortId = shortid(8);
  await URL.create({
    shortId: shortId,
    redirectURL: url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render("home", { id: shortId });
  //return res.json({ id: shortId });
};

export const handlegetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId: shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};
