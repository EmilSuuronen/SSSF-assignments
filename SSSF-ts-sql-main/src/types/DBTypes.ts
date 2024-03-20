type Category = {
  category_id: number;
  category_name: string;
};

type Species = {
  species_id: number;
  species_name: string;
  category: number;
  image: string;
};

type Animals = {
  animal_id: number;
  animal_name: string;
  species: number;
  birtdate: string;
};

export {Category, Species, Animals};
