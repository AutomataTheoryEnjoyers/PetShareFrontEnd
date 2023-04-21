import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { PetListElement } from "../../../components/petListElement";
import { Header } from "../../../components/header";
import { useMyPets } from "../../queries/myPets";
export const MyPets = () => {
    const { data } = useMyPets();
    return (
        <AnimatedPage>
            <Header>My Pets</Header>
            <List>
                {data?.map((pet) => (
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
