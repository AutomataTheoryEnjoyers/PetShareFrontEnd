import styled from "styled-components";
import { Link } from "react-router-dom";
import { Report } from "../types/report";
import { faArrowRight, faBullhorn, faUser, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  report: Report;
};

export const ReportListElement = ({ report }: Props) => {
  const renderIcon = () => {
    if (report.reportType === "announcement") {
      return <FontAwesomeIcon icon={faBullhorn} size="2x"/>;
    } else if (report.reportType === "adopter") {
        return <FontAwesomeIcon icon={faUser} size="2x" />;
    } else {
        return <FontAwesomeIcon icon={faHome} size="2x" />;
    } 
  };

  return (
    <LinkStyled to={`${report.id}`}>
      <Container>
        <LeftContainer>
                  <Title>Report ID: {report.id}</Title>
          <BottomText>{report.message}</BottomText>
        </LeftContainer>
        <RightContainer>
          {renderIcon()}
          <FontAwesomeIcon className="right-arrow" fontSize={30} icon={faArrowRight} />
        </RightContainer>
      </Container>
    </LinkStyled>
  );
};

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Container = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.powderWhite};
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
    background-color: ${(props) => props.theme.colors.lightGreen};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const BottomText = styled.p`
  margin: 0;
  align-self: flex-end;
  text-align: left;
  align-self: flex-start;
  padding: 2px;
  color: ${(props) => props.theme.colors.darkgrey};
  overflow: hidden;
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

const Title = styled.h1`
  margin: 0;
  padding: 5px;
  font-size: 20px;
`;