import { Shelter, dummyShelter } from "./shelter";

export type Pet = {
  id: string;
  name: string;
  sex: string;
  species: string;
  breed: string;
  birthday: Date;
  description: string;
  photoUrl: string;
  status: string;
  shelter: Shelter;
};

export const dummyPet = {
  id: "",
  name: "",
  sex: "",
  species: "",
  breed: "",
  birthday: new Date(),
  description: "",
  photoUrl: "",
  status: "",
  shelter: dummyShelter,
} as Pet;
