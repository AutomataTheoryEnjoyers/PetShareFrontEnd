import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { Shelter } from "../../types/shelter";

export const useMyShelter = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const query = useQuery<Shelter>("my-shelter", () =>
    fetch(BACKEND_URL + "shelter/" + userData?.userIdDB, {
      method: "GET",
      headers: {
        authorization: `Bearer ${userData?.accessToken}`,
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const response = await res.json();
      return response;
    })
  );
  return query;
};
