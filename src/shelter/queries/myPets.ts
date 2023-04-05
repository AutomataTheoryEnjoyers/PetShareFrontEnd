import { useQuery } from "react-query"
import { BACKEND_URL } from "../../backendUrl";
import { Pet } from "../../types/pet"

export const useMyPets = () => {
  const query = useQuery<Pet[]>('my-pets', () => fetch(
    BACKEND_URL + "pet",
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/plain'
      }
    }
  ).then(res => res.json())
    .then(res => res.map((announcementResponse: any) => (
      {
        ...announcementResponse.pet,
        birthday: new Date(announcementResponse.pet.birthday)
      }
    ))));
  return query
}
