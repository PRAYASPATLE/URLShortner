import { Router } from "express";
import {
  handlegeneratenewshortURL,
  handlegetAnalytics,
} from "../constrollers/url.js";
import URL from "../models/url.js";

const router = Router();

router.post("/", handlegeneratenewshortURL);



router.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const result = await URL.findOneAndUpdate(
    { shortId: shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  console.log(shortId, result)
  res.redirect(result.redirectURL);
});

router.get("/analytics/:shortId", handlegetAnalytics);

export default router;
