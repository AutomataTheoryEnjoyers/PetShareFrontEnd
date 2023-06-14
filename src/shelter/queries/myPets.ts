import { useQuery } from "react-query";
import { ANNOUNCEMENT_URL, SHELTER_URL } from "../../backendUrl";
import { Pet } from "../../types/pet";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const useMyPets = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const query = useQuery<Pet[]>("my-pets", () =>
    fetch(ANNOUNCEMENT_URL + "shelter/pets", {
      method: "GET",
      headers: {
        authorization: `Bearer ${userData?.accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        res.map((res: any) => ({
          ...res,
          birthday: new Date(res.birthday),
        }))
      )
  );
  return query;
};
