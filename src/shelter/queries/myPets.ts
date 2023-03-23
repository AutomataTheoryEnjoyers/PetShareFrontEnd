import { Pet } from "../../types/pet"

export const useMyPets = () => {
  const query = {
    isLoading: false,
    data: [
      {
        name: "fifik1",
        breed: "Best Breed",
        species: "Best species",
        description: "",
        id: "1111-111-11111"
      },
      {
        name: "fifik2",
        breed: "Best Breed",
        species: "Best species",
        description: "",
        id: "2111-111-11111"
      },
      {
        name: "fifik3",
        breed: "Best Breed",
        species: "Best species",
        description: "",
        id: "3111-111-11111"
      },
      {
        name: "fifik4",
        breed: "Best Breed",
        species: "Best species",
        description: "",
        id: "4111-111-11111"
      },
    ] as Pet[]
  }
  return query
}
