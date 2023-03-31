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
      }
    }
  ).then(res => res.json()));
  return query
}
