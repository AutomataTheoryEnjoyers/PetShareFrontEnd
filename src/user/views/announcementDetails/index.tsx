import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ImageElementDetails } from "../../../components/ImageElementDetails";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { AnnouncementDetailsElement } from "../../../components/announcementDetails";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";
import { usePostApplication } from "../../mutations/postApplication";
import { usePutApplicationWithdraw } from "../../mutations/putApplicationWithdraw";
import { useGetAnnouncementSingle } from "../../../queries/getAnnouncementSingle";
import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { ApplicationResponse } from "../../../types/applicationsResponse";
import { UserContext } from "../../../components/userContext";
import { UserContextType } from "../../../types/userContextType";
import { BACKEND_URL } from "../../../backendUrl";
import { Application } from "../../../types/application";

export const AnnouncementDetails = () => {
  const { id } = useParams();
  const [isApplicable, setIsApplicable] = useState<boolean>(true);
  const announcement = useGetAnnouncementSingle(id as string);
  const [applicationsLoading, setApplicationsLoading] = useState<boolean>(true);
  const [matchingApplication, setMatchingApplication] =
    useState<Application | null>(null);

  const { userData } = useContext<UserContextType>(UserContext);

  const fetchMyApplicationsAdopter = async (
    pageNumber: number,
    pageCount: number
  ) => {
    const queryStringArray =
      [
        pageNumber &&
          `PageNumber=${encodeURIComponent(JSON.stringify(pageNumber))}`,
        pageCount &&
          `PageCount=${encodeURIComponent(JSON.stringify(pageCount))}`,
      ].filter((s) => !!s) ?? [];

    const response = await fetch(
      `${BACKEND_URL}applications?${queryStringArray.join("&")}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const responseDecoded = await response.json();
    console.log(responseDecoded);
    return responseDecoded as ApplicationResponse;
  };

  useEffect(() => {
    const checkApplications = async () => {
      // Skaranie boskie
      setApplicationsLoading(true);
      const responseFirst = (await fetchMyApplicationsAdopter(
        0,
        100
      )) as ApplicationResponse;
      const foundApplications = responseFirst.applications.filter(
        (application) => (id === application.announcementId ? true : false)
      );
      console.log(matchingApplication);
      if (foundApplications.length > 0) {
        setIsApplicable(false);
        setMatchingApplication(foundApplications[0]);
      }

      if (foundApplications.length <= 0 && responseFirst.count > 100) {
        for (let i = 1; i < Math.ceil(responseFirst.count / 100); i++) {
          const response = (await fetchMyApplicationsAdopter(
            i,
            100
          )) as ApplicationResponse;
          const foundApplications = response.applications.filter(
            (application) => (id === application.announcementId ? true : false)
          );
          if (foundApplications.length > 0) {
            setIsApplicable(false);
            setMatchingApplication(foundApplications[0]);
          }
        }
      }
      setApplicationsLoading(false);
    };

    checkApplications();
  }, []);

  const mutateApplicationPost = usePostApplication();
  const mutateApplicationWithdraw = usePutApplicationWithdraw();

  const useHandlePostApplication = async () => {
    mutateApplicationPost(id as string, {
      onSuccess: () => setIsApplicable(false),
    });
  };
  const useWithdrawApplication = async () => {
    mutateApplicationWithdraw(matchingApplication?.id as string, {
      onSuccess: () => setIsApplicable(true),
    });
  };

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
          <div id="apply-button">
            {applicationsLoading ? (
              <CenteredBox>
                <ClipLoader />
              </CenteredBox>
            ) : (
              <ApplyButton
                isApplicable={isApplicable}
                onClick={
                  isApplicable
                    ? useHandlePostApplication
                    : useWithdrawApplication
                }
              >
                {isApplicable ? "Adopt!" : "Withdraw"}
              </ApplyButton>
            )}
          </div>
        </Container>
      )}
    </AnimatedPage>
  );
};

const ApplyButton = styled.div<{ isApplicable: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.isApplicable ? props.theme.colors.main : props.theme.colors.tomato};
  color: #fff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 5px;
  font-size: 30px;
  height: 50px;
  font-weight: 600;
  letter-spacing: 5px;
  transition: 0.5s all;

  :hover {
    background: ${(props) =>
      props.isApplicable
        ? props.theme.colors.darkGreen
        : props.theme.colors.darkTomato};
  }
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
    "user user user"
    "apply apply apply";

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

  #apply-button {
    grid-area: apply;
  }
`;

const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;
