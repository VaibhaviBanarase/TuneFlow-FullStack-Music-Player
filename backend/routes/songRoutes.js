import express from "express";
import {protect} from  "../middleware/authMiddleware.js";
import {getPlaylistingByTag,getSongs,toggleFavourites,} from "../controllers/songController.js";

const songRouter =express.Router();

songRouter.get("/",getSongs);
songRouter.get("/playlistByTag/:tag", getPlaylistingByTag);
songRouter.post("/favourites", protect, toggleFavourites);
songRouter.get("/favourites", protect, (req, res) => {
  res.json(req.user.favourites);
});

export default songRouter;