import styled from "styled-components";
import { AnouncementListElement } from "../../../components/anouncementListElement";
import { useMyAnouncements } from "../../queries/myAnouncements";
export const MyAnouncements = () => {
  const { data } = useMyAnouncements();
  return <Container>
    <Header>My Anouncements</Header>
    <List>{data?.map((anouncement) => (
      <AnouncementListElement key={anouncement.ID} anouncement={anouncement} />
    ))}</List>
  </Container>;
};

const Container = styled.div`
`

const Header = styled.h1`
  margin-bottom: 20px;
  margin-top: 0;
  text-align: center;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
