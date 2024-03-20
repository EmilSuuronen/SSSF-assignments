// animalController.ts
import {Request, Response, NextFunction} from 'express';
import {Animals} from '../../types/DBTypes';
import {getAllAnimals, getAnimalById} from '../models/animalModel';

const animalListGet = async (
  req: Request,
  res: Response<Animals[]>,
  next: NextFunction
) => {
  try {
    const animals = await getAllAnimals();
    res.json(animals);
  } catch (error) {
    next(error);
  }
};

const animalGet = async (
  req: Request<{id: string}, {}, {}>,
  res: Response<Animals>,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const animal = await getAnimalById(id);
    res.json(animal);
  } catch (error) {
    next(error);
  }
};

export {animalListGet, animalGet};
