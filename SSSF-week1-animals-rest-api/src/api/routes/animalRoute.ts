import express from 'express';
import {animalGet, animalListGet} from '../controllers/animalController';

const router = express.Router();

router.route('/').get(animalListGet);

router.route('/:id').get(animalGet);

export default router;
