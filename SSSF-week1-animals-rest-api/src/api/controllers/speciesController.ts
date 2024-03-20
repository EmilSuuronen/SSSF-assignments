import {Request, Response, NextFunction} from 'express';
import {Species} from '../../types/DBTypes';
import {getAllSpecies, getSpeciesById} from '../models/speciesModel';

const speciesListGet = async (
  req: Request,
  res: Response<Species[]>,
  next: NextFunction
) => {
  try {
    const species: Species[] = await getAllSpecies();
    res.json(species);
  } catch (e) {
    next(e);
  }
};

const speciesGet = async (
  req: Request<{id: string}, {}, {}>,
  res: Response<Species>,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const species = await getSpeciesById(id);
    res.json(species);
  } catch (e) {
    next(e);
  }
};

export {speciesListGet, speciesGet};
