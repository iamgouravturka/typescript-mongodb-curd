import express from 'express';
import { getFavoriteList, getFavorite, createFavorite, updateFavorite, deleteFavorite  } from '../controller/favorite';

const favoriteRoute = express.Router();

favoriteRoute.get('/', getFavoriteList).get('/:id', getFavorite).post('/', createFavorite).put('/:id', updateFavorite).delete('/:id', deleteFavorite);

export default favoriteRoute;