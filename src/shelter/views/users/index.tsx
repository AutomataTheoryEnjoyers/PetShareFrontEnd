import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { UserListElement } from "../../../components/userListElement";
import { Header } from "../../../components/header";
import { useMyUsers } from "../../queries/myUsers";
import { DefaultFilterState, UserFiltersForm } from "../../../components/userFiltersForm";
import { UserFilters } from "../../../types/userFilter";
import { useState } from "react";
export const Users = () => {
    const { data } = useMyUsers();
    const [formState, setFormState] = useState<UserFilters>(DefaultFilterState);
    return (
        <AnimatedPage>
            <Header>Users</Header>
            <UserFiltersForm filters={formState} onChange={(arg) => setFormState({ ...formState, ...arg })} />
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
