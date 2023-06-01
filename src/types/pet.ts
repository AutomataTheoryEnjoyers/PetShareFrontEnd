import { Shelter } from "./shelter";

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
