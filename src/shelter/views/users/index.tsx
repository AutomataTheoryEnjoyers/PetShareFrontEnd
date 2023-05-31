import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { UserDetailsElement } from "../../../components/userDetailsElement";
import { Header } from "../../../components/header";
import { useMyUsers } from "../../queries/myUsers";
export const MyAnnouncements = () => {
    const { data } = useMyUsers();
    return (
        <AnimatedPage>
            <Header>Users</Header>
            <List>
                {data?.map((user) => (
                    <UserDetailsElement
                        key={user.id}
                        user={user}
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
