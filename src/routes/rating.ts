import express from "express";
import { getRating, getRatingList, createRating, updateRating, deleteRating } from "../controller/rating";

const ratingRoute = express.Router();

ratingRoute.get('/', getRatingList).get('/:id', getRating).post('/', createRating).put('/:id', updateRating).delete('/:id', deleteRating);

export default ratingRoute;