import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { PetListElement } from "../../../components/petListElement";
import { Header } from "../../../components/header";
//import { usePets } from "../../queries/pets";
import { mockPets } from "../../../mocks/mockData";
export const Pets = () => {
    //const { data } = useMyPets();
    const pets = mockPets;
    return (
        <AnimatedPage>
            <Header>My Pets</Header>
            <List>
                {pets.map((pet) => (
                    <PetListElement
                        key={pet.id}
                        pet={pet}
                    />
                ))}
            </List>
        </AnimatedPage>
    );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
