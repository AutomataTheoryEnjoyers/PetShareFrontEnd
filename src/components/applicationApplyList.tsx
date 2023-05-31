import styled from "styled-components";
import { Announcement } from "../types/announcement";
import { Application } from "../types/application";
import { ApplicationApplyListElement } from "./applicationApplyListElement";

type Props = {
  announcement: Announcement;
  applications: Application[];
};

export const ApplicationApplyList = ({
  announcement,
  applications,
}: Props) => {
  var usableApplications = applications.filter(
    (application) => application.announcement.id === announcement.id
  );
  return (
    <ApplicationListContainer>
      {usableApplications.map((application) => (
        <ApplicationApplyListElement
          key={application.id}
          application={application}
        />
      ))}
    </ApplicationListContainer>
  );
};

const ApplicationListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: start;
  list-style: none;
  align-items: stretch;
  gap: 10px;
`;
