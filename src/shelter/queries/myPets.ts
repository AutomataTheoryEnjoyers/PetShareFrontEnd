import { Pet } from "../../types/pet"

export const useMyPets = () => {
  const query = {
    isLoading: false,
    data: [
      {
        Name: "fifik1",
        Breed: "Best Breed",
        Species: "Best species",
        Description: "",
        ID: "1111-111-11111"
      },
      {
        Name: "fifik2",
        Breed: "Best Breed",
        Species: "Best species",
        Description: "",
        ID: "2222-222-22222"
      },
      {
        Name: "fifik3",
        Breed: "Best Breed",
        Species: "Best species",
        Description: "",
        ID: "3333-333-33333"
      },
    ] as Pet[]
  }
  return query
}
