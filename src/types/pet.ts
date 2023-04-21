import { Shelter } from "./shelter";

export type Pet = {
  id: string;
  shelterId: string;
  shelter: Shelter;
  name?: string;
  species?: string;
  breed?: string;
  birthday: Date;
  description?: string;
  photo?: string;
};
