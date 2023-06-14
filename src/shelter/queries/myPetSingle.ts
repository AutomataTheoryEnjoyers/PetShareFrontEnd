import { useQuery } from "react-query";
import { Pet } from "../../types/pet";
import { BACKEND_URL } from "../../backendUrl";

export const useMyPetSingle = (petId: string) => {
  const query = useQuery<Pet>("get-announcement", () =>
    fetch(BACKEND_URL + "pet/" + petId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => ({
        ...res,
        birthday: new Date(res.birthday),
      }))
  );

  return query;
};
