import styled from "styled-components";
import { useMyApplicationsShelter } from "../../queries/myApplicationsShelter";
import { useParams } from "react-router-dom";
import { ImageElementDetails } from "../../../components/ImageElementDetails";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { AnnouncementDetailsElement } from "../../../components/announcementDetails";
import { ApplicationApplyList } from "../../../components/applicationApplyList";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";
import { Application } from "../../../types/application";
import { useGetAnnouncementSingle } from "../../../queries/getAnnouncementSingle";
import { ClipLoader } from "react-spinners";
import { PaginationParameters } from "../../../types/paginationParameters";
import { useState } from "react";
import { Pagination } from "../../../components/pagination";

export const AnnouncementDetails = () => {
  const { id } = useParams();
  const announcement = useGetAnnouncementSingle(id as string);
  const announcementsPerPage = 5;
  const [paginationParams, setPaginationParams] =
    useState<PaginationParameters>({
      PageNumber: 1,
      PageCount: announcementsPerPage,
    });
  const applications = useMyApplicationsShelter(
    id as string,
    paginationParams.PageNumber,
    paginationParams.PageCount
  );

  if (announcement.isLoading) {
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
      {announcement?.data && (
        <Container>
          <div id="image">
            <ImageElementDetails pet={announcement?.data.pet} />
          </div>
          <div id="pet">
            <PetDetailsElement pet={announcement?.data.pet} />
          </div>
          <div id="shelter">
            <ShelterDetailsElement shelter={announcement?.data.pet.shelter} />
          </div>
          <div id="details">
            <AnnouncementDetailsElement announcement={announcement?.data} />
          </div>
          <div id="userlist">
            <ApplicationApplyList
              announcement={announcement?.data}
              applications={applications.data?.applications as Application[]}
            />
          </div>
          <Separator />
          <Pagination
            elementCount={applications.data ? applications.data.count : 1}
            paginationParams={paginationParams}
            setPaginationParams={setPaginationParams}
          />
        </Container>
      )}
    </AnimatedPage>
  );
};

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
  background-color: black;
  margin-bottom: 0;
`;

const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  height: min(60vh, 600px);
  grid-template-areas:
    "title title title"
    "image image pet"
    "image image shelter"
    "details details details"
    "details details details"
    "user user user";

  grid-template-columns: 1fr 1fr 1fr;

  #title {
    grid-area: title;
  }

  #image {
    grid-area: image;
  }

  #pet {
    grid-area: pet;
  }

  #shelter {
    grid-area: shelter;
  }

  #details {
    grid-area: details;
  }

  #userlist {
    grid-area: user;
  }
`;
