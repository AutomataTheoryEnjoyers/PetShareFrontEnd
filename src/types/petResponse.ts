import { Pet } from "./pet";

export type PetResponse = {
  pets: Pet[];
  pageNumber: number;
  count: number;
};
