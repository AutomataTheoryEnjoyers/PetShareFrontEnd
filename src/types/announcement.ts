import { Pet } from "./pet";

export type Announcement = {
  id: string;
  title?: string;
  description?: string;
  creationDate: Date;
  closingDate?: Date;
  lastUpdateDate: Date;
  status: string;
  pet: Pet;
  isLiked: boolean;
};
