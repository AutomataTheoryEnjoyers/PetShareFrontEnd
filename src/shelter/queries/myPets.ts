import { useQuery } from "react-query";
import { BACKEND_URL } from "../../consts";
import { Pet } from "../../types/pet"

export const useMyPets = () => {
  const query = useQuery<Pet[]>('pet', () => fetch(
    BACKEND_URL + "pet",
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }, /*body: JSON.stringify({})*/
    }
  ).then(res => res.json()));
  console.log(query);
  return query
}
