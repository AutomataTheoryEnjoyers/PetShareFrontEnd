import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Application } from "../types/application";

type Props = {
  application: Application;
};

export const ApplicationListElement = ({ application }: Props) => {
  return (
    <LinkStyled to={`/user/announcements/${application.announcement.id}`}>
      <Container applicationStatus={application.applicationStatus}>
        <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-tuna-sounds-images.voicemod.net%2F8b2da0e8-5f18-4c46-b436-a80629388aa0-1662350742067.jpg&f=1&nofb=1&ipt=56ff424dfc11ad96ed521268ede16776efc3d3ec8c1133b0d0ef15ae352e6d55&ipo=images" />
        <LeftContainer>
          <Title>{application.announcement.title}</Title>
          <BottomText>
            {application.announcement.pet.name},{" "}
            {application.announcement.pet.breed},{" "}
            {new Date().getFullYear() -
              application.announcement.pet.birthday.getFullYear()}{" "}
            years old
          </BottomText>
        </LeftContainer>
        <RightContainer>
          <FontAwesomeIcon
            className="right-arrow"
            fontSize={30}
            icon={faArrowRight}
          />
        </RightContainer>
      </Container>
    </LinkStyled>
  );
};

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Title = styled.h1`
  margin: 0;
  padding: 5px;
  font-size: 20px;
`;

const handleColorType = (status: string) => {
  switch (status) {
    case "Created":
      return "#03a9f3";
    case "Accepted":
      return "#f56342";
    case "Rejected":
      return "#aa0000";
    case "Withdrawn":
      return "0000aa";
    case "Deleted":
      return "ffffff";
    default:
      return "#fff";
  }
};

const Container = styled.div<{ applicationStatus: string }>`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background-color: ${(props) => handleColorType(props.applicationStatus)};
  height: 150px;
  display: flex;
  transition: all 0.2s ease-in;
  .right-arrow {
    opacity: 0;
    transition: all 0.2s ease-in;
    justify-content: center;
    margin-right: 50px;
  }
  :hover {
    top: -10px;
    transform: scale(1.05);
    z-axis: 1000;
    .right-arrow {
      opacity: 1;
      margin-right: 0;
    }
`;

const BottomText = styled.p`
  margin: 0;
  align-self: flex-end;
  text-align: left;
  align-self: flex-start;
  padding: 5px;
  color: ${(props) => props.theme.colors.darkgrey};
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  width: 150px;
  border-radius: 5px;
  margin-right: 15px;
  object-fit: cover;
`;
