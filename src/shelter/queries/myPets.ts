import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { PaginationParameters } from "../../types/paginationParameters";
import { PetResponse } from "../../types/petResponse";

export const useMyPets = (paginationParams: PaginationParameters | null) => {
  const { userData } = useContext<UserContextType>(UserContext);

  const queryStringArray =
    [
      paginationParams?.PageNumber &&
        `PageNumber=${encodeURIComponent(
          JSON.stringify(paginationParams.PageNumber)
        )}`,
      paginationParams?.PageCount &&
        `PageCount=${encodeURIComponent(
          JSON.stringify(paginationParams.PageCount)
        )}`,
    ].filter((s) => !!s) ?? [];

  const query = useQuery<PetResponse>(
    `my-pets-page-${paginationParams?.PageNumber}`,
    () =>
      fetch(BACKEND_URL + `shelter/pets?${queryStringArray.join("&")}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json())
  );

  const response = query.isLoading
    ? null
    : ({
        pets: query.data?.pets.map((res: any) => ({
          ...res,
          birthday: new Date(res.birthday),
        })),
        pageNumber: query.data?.pageNumber,
        count: query.data?.count,
      } as PetResponse);

  return { query, response };
};
