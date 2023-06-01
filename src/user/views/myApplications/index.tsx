import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { ApplicationListElement } from "../../../components/applicationListElement";
import { Header } from "../../../components/header";
import { useMyApplicationsAdopter } from "../../queries/myApplicationsAdopter";
export const MyApplications = () => {
  // change for actual my applications data
  const { data } = useMyApplicationsAdopter();
  return (
    <AnimatedPage>
      <Header>My Applications</Header>
      <List>
        {data?.map((application) => (
          <ApplicationListElement
            key={application.id}
            application={application}
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
