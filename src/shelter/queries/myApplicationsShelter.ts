// import { useQuery } from "react-query"
import { useContext } from "react";
import { Application } from "../../types/application";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";

export const useMyApplicationsShelter = (announcementId: string) => {
  const { userData } = useContext<UserContextType>(UserContext);

  const query = useQuery<Application[]>(
    "my-applications-per-announcement",
    () =>
      fetch(BACKEND_URL + "applications/" + announcementId, {
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
          }))
        )
  );
  return query;
};
