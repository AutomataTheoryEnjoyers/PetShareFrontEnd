import { useEffect } from "react";



import { useState } from "react";
import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { UserListElement } from "../../../components/userListElement";
import { Header } from "../../../components/header";
import { useUsers } from "../../queries/getUsers";
import { DefaultFilterState, UserFiltersForm } from "../../../components/userFiltersForm";
import { UserFilters } from "../../../types/userFilter";
import { ClipLoader } from "react-spinners";
import { PaginationParameters } from "../../../types/paginationParameters";
import { Pagination } from "../../../components/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const Users = () => {
    const usersPerPage = 5;
    const [paginationParams, setPaginationParams] =
        useState<PaginationParameters>({
            PageNumber: 0,
            PageCount: usersPerPage,
        });
    const users = useUsers(paginationParams);
    const [formState, setFormState] = useState<UserFilters>(DefaultFilterState);
    const [sortedBy, setSortedBy] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const initialData = users.response;
    const [data, setData] = useState(initialData?.adopters);
    useEffect(() => {
        if (!users.query.isLoading) {
            const sorted = [...initialData!.adopters].sort((a, b) => {
                if (sortOrder === "asc") {
                    return a.userName.localeCompare(b.userName);
                } else {
                    return b.userName.localeCompare(a.userName);
                }
            });
            setData(sorted);
        }
    }, [initialData, formState, sortOrder, users.query.isLoading]);

    if (users.query.isLoading) {
        return (
            <AnimatedPage>
                <Header>Users</Header>
                <CenteredBox>
                    <ClipLoader />
                </CenteredBox>
            </AnimatedPage>
        );
    }
    const sortUsers = (field: string) => {
        const sortedUsers = [...data!].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.userName?.localeCompare(b.userName || "") || 0;
            } else {
                return b.userName?.localeCompare(a.userName || "") || 0;
            }
        });
        setSortedBy(field);
        setData(sortedUsers);
    };

    const clearSort = () => {
        setSortedBy(null);
        setData(initialData!.adopters);
    };



    const toggleSortOrder = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <AnimatedPage>
            <Header>Users</Header>
            <UserFiltersForm filters={formState} onChange={(arg) => setFormState({ ...formState, ...arg })} />
            <SortSection>
                <SortButtons>
                    <SortButton active={sortedBy === "username"} onClick={() => { toggleSortOrder(); sortUsers("username"); }}>
                        Sort by Username {sortedBy === "username" && (sortOrder === "asc" ? <FontAwesomeIcon icon={faArrowUp} /> :
                            <FontAwesomeIcon icon={faArrowDown} />)}
                    </SortButton>
                    <SortButton active={sortedBy !== null} onClick={clearSort}>
                        Clear Sort
                    </SortButton>
                </SortButtons>

            </SortSection>
            <List>
                {data?.map((user) => (
                    <UserListElement key={user.id} user={user} />
                ))}
            </List>
            <Pagination
                elementCount={users.response ? users.response.count : 1}
                paginationParams={paginationParams}
                setPaginationParams={setPaginationParams}
            />
        </AnimatedPage>
    );
};
const SortSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SortButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const SortButton = styled.button<{ active: boolean }>`
  padding: 5px 10px;
  background-color: lightblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;