import promisePool from '../../database/db';
import {Species} from '../../types/DBTypes';
import {RowDataPacket} from 'mysql2';
import CustomError from '../../classes/CustomError';

const getAllSpecies = async (): Promise<Species[]> => {
  const [rows] = await promisePool.execute<RowDataPacket[] & Species[]>(
    'SELECT * FROM species'
  );
  if (!rows) {
    throw new Error('No species found');
  }
  return rows as Species[];
};

const getSpeciesById = async (id: number) => {
  const [rows] = await promisePool.execute<RowDataPacket[] & Species[]>(
    'SELECT * FROM species WHERE species_id = ?',
    [id]
  );
  if (!rows) {
    throw new CustomError('Not found!', 404);
  }
  return rows[0];
};

export {getAllSpecies, getSpeciesById};
