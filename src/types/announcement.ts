import { Pet } from "./pet";

export type Announcement = {
  id: string;
  title?: string;
  description?: string;
  creationDate: Date;
  closingDate?: Date;
  status: number;
  lastUpdateDate: Date;
  pet: Pet;
};
