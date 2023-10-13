import express from 'express';

import moviesControllers from '../controllers/movie.js';

const router = express.Router();

router.get('/', moviesControllers.getMovies);
router.get('/:id', moviesControllers.getMovie);
router.post('/', moviesControllers.postMovie);
router.put('/ :id', moviesControllers.putMovie);

router.delete('/:id', moviesControllers.deleteMovie);



export default router;
