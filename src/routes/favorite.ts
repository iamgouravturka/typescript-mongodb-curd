import express from 'express';
import { getFavoriteList, getFavorite, createFavorite  } from '../controller/favorite';

const favoriteRoute = express.Router();

favoriteRoute.get('/', getFavoriteList).get('/:id', getFavorite).post('/', createFavorite);

export default favoriteRoute;