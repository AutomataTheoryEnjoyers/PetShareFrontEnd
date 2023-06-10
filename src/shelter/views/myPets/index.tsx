import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { PetListElement } from "../../../components/petListElement";
import { Header } from "../../../components/header";
import { useMyPets } from "../../queries/myPets";
import { PaginationParameters } from "../../../types/paginationParameters";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Pagination } from "../../../components/pagination";

export const MyPets = () => {
  const announcementsPerPage = 5;
  const [paginationParams, setPaginationParams] =
    useState<PaginationParameters>({
      PageNumber: 0,
      PageCount: announcementsPerPage,
    });
  const pets = useMyPets(paginationParams);

  if (pets?.query?.isLoading) {
    return (
      <AnimatedPage>
        <CenteredBox>
          <ClipLoader />
        </CenteredBox>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <Header>My Pets</Header>
      <List>
        {pets.response?.pets?.map((pet) => (
          <PetListElement key={pet.id} pet={pet} />
        ))}
      </List>
      <Separator />
      <Pagination
        elementCount={pets.response ? pets.response.count : 1}
        paginationParams={paginationParams}
        setPaginationParams={setPaginationParams}
      />
    </AnimatedPage>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;

const Separator = styled.hr`
  width: 100%;
  height: 3px;
  margin-bottom: 0;
  opacity: 0;
`;
