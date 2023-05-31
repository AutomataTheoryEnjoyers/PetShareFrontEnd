import { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { AnnouncementFiltersForm } from "../../../components/announcementFiltersForm";
import { AnnouncementListElement } from "../../../components/announcementListElement";
import { Header } from "../../../components/header";
import { AnnouncementFilters } from "../../../types/announcementFilter";
import { useAnnouncements } from "../../../queries/announcements";
import { useMyShelter } from "../../queries/myShelter";

export const MyAnnouncements = () => {
  const ShelterFilterState = {
    location: [],
    breed: [],
    shelter: [],
    species: [],
  } as AnnouncementFilters;

  const [formState, setFormState] =
    useState<AnnouncementFilters>(ShelterFilterState);
  const { data } = useAnnouncements(formState);
  const { data: currentShelter } = useMyShelter();

  useEffect(() => {
    if (
      currentShelter?.fullShelterName !== null &&
      ShelterFilterState.shelter.includes(
        currentShelter?.fullShelterName as string
      ) === false
    ) {
      ShelterFilterState.shelter.push(
        currentShelter?.fullShelterName as string
      );
    }
  }, [currentShelter, ShelterFilterState.shelter]);

  return (
    <AnimatedPage>
      <Header>My Announcements</Header>
      <AnnouncementFiltersForm
        filters={formState}
        onChange={(arg) => setFormState({ ...formState, ...arg })}
      />
      <List>
        {data?.map((announcement) => (
          <AnnouncementListElement
            key={announcement.id}
            announcement={announcement}
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
