import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { UserListElement } from "../../../components/userListElement";
import { Header } from "../../../components/header";
import { useMyUsers } from "../../queries/myUsers";
export const Users = () => {
    const { data } = useMyUsers();
    return (
        <AnimatedPage>
            <Header>Users</Header>
            <List>
                {data?.map((user) => (
                    <UserListElement
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
