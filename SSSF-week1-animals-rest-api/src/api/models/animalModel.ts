// animalModel.ts
import promisePool from '../../database/db';
import {Animals} from '../../types/DBTypes';
import {RowDataPacket} from 'mysql2';
import CustomError from '../../classes/CustomError';

const getAllAnimals = async (): Promise<Animals[]> => {
  const [rows] = await promisePool.execute<RowDataPacket[] & Animals[]>(
    'SELECT * FROM animals'
  );
  if (!rows) {
    throw new Error('No animals found');
  }
  return rows as Animals[];
};

const getAnimalById = async (id: number) => {
  const [rows] = await promisePool.execute<RowDataPacket[] & Animals[]>(
    'SELECT * FROM animals WHERE animal_id = ?',
    [id]
  );
  if (!rows) {
    throw new CustomError('Not found!', 404);
  }
  return rows[0];
};

export {getAllAnimals, getAnimalById};
