import styled from "styled-components";
import { useMyUsers } from "../../queries/myUsers";
import { User } from "../../../types/user";
import { useParams } from "react-router-dom";
import { ImageElement } from "../../../components/ImageElement";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { UserDetailsElement } from "../../../components/userDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";

export const UserDetails = () => {
    const { id } = useParams();

    const users = useMyUsers();
    const currentUser = users.data?.find(
        (user) => user.id === id
    ) as User;
   

    return (
        currentUser && (
            <AnimatedPage>
                <Container>
                    
                    <div id="user">
                        <UserDetailsElement user={currentUser} />
                    </div>
                    
                </Container>

            </AnimatedPage>
        )
    );
};

const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  height: min(60vh, 600px);
  grid-template-areas:
    
    "user";

  grid-template-columns: 1fr

  

  #user {
    grid-area: user;
  }
`;
