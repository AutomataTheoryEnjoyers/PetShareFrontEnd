import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { PetListElement } from "../../../components/petListElement";
import { Header } from "../../../components/header";
//import { useMyPets } from "../../queries/myPets";
import { mockPets } from "../../../mocks/mockData";
export const MyPets = () => {
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
