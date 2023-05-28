import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { Pet } from "../../types/pet";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const useMyPets = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const query = useQuery<Pet[]>("my-pets", () =>
    fetch(BACKEND_URL + "shelter/pets", {
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
