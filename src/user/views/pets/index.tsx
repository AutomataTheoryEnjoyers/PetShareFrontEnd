import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { PetListElement } from "../../../components/petListElement";
import { Header } from "../../../components/header";
import { usePets } from "../../queries/pets";

export const Pets = () => {
    const { data } = usePets();
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
