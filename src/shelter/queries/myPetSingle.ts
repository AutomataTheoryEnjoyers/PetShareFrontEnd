import { useQuery } from "react-query";
import { Pet } from "../../types/pet";
import { BACKEND_URL } from "../../backendUrl";
import { UserContextType } from "../../types/userContextType";
import { useContext } from "react";
import { UserContext } from "../../components/userContext";

export const useMyPetSingle = (petId: string) => {
  const { userData } = useContext<UserContextType>(UserContext);
  const query = useQuery<Pet>("get-announcement", () =>
    fetch(BACKEND_URL + "pet/" + petId, {
      method: "GET",
        headers: {
        authorization: `Bearer ${userData?.accessToken}`,
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
