import styled from "styled-components";
import { useParams } from "react-router-dom";
import { UserDetailsElement } from "../../../components/userDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";
import { useGetUserSingle } from "../../queries/getUserSingle";
import { Header } from "../../../components/header";
import { ClipLoader } from "react-spinners";

export const UserDetails = () => {
    const { id } = useParams();

    const currentUser = useGetUserSingle(id!);

    if (currentUser.isLoading) {
        return (
            <AnimatedPage>
                <Header>Users</Header>
                <CenteredBox>
                    <ClipLoader />
                </CenteredBox>
            </AnimatedPage>
        );
    }

    return (
        currentUser && (
            <AnimatedPage>
                <Container>
                    
                    <div id="user">
                        <UserDetailsElement user={currentUser.data!} />
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
const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;