import { Pet } from "./pet"

export type Anouncement = {
  id: string,
  title?: string,
  description?: string,
  creationDate: Date,
  closingDate?: Date,
  status: number,
  lastUpdateDate: Date,
  idPet: string
  pet: Pet,
}
