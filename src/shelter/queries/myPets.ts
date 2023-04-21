import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { Pet } from "../../types/pet";

export const useMyPets = () => {
  //const query = useQuery<Pet[]>("my-pets", () =>
  //  fetch(BACKEND_URL + "pet", {
  //    method: "GET",
  //    headers: {
  //      "Content-Type": "application/json",
  //      accept: "text/plain",
  //    },
  //  })
  //    .then((res) => res.json())
  //    .then((res) =>
  //      res.map((res: any) => ({
  //        ...res,
  //        birthday: new Date(res.birthday),
  //      }))
  //    )
  //);
    const query = {
        isLoading: false,
        data: [
            {
                name: "fifik1",
                breed: "Best Breed",
                species: "Best species",
                description: "",
                birthday: new Date("12.04.2001"),
                id: "1111-111-11111"
            },
            {
        name: "fifik2",
        breed: "Best Breed",
        species: "Best species",
                description: "",
                birthday: new Date("12.04.2001"),
        id: "2111-111-11111"
      },
      {
        name: "fifik3",
        breed: "Best Breed",
        species: "Best species",
          description: "",
          birthday: new Date("12.04.2001"),
        id: "3111-111-11111"
      },
      {
        name: "fifik4",
        breed: "Best Breed",
        species: "Best species",
          description: "",
          birthday: new Date("12.04.2001"),
        id: "4111-111-11111"
      },
    ] as Pet[]
  }
  return query;
};
