import styled from "styled-components";
import { Application } from "../types/application";
import {
  faPhone,
  faEnvelope,
  faUser,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type HoverState = "None" | "Check" | "Cross";

type UserProps = {
  application: Application;
};

export const ApplicationContainerElement = ({ application }: UserProps) => {
  const [hoverState, setHoverState] = useState("None" as HoverState);

  return (
    <ApplicationContainer hoverState={hoverState}>
      <UsernameText>
        {application.user.userName} <FontAwesomeIcon icon={faUser} />
      </UsernameText>
      <DetailText>
        <FontAwesomeIcon icon={faPhone} />
        {application.user.phoneNumber}
      </DetailText>
      <DetailText>
        <FontAwesomeIcon icon={faEnvelope} />
        {application.user.email}
      </DetailText>
      <ButtonsContainer className="buttonContainer">
        <FontAwesomeIcon
          className="check"
          icon={faCheck}
          onMouseEnter={() => setHoverState("Check")}
          onMouseLeave={() => setHoverState("None")}
        />
        <FontAwesomeIcon
          className="cross"
          icon={faXmark}
          onMouseEnter={() => setHoverState("Cross")}
          onMouseLeave={() => setHoverState("None")}
        />
      </ButtonsContainer>
    </ApplicationContainer>
  );
};

const ApplicationContainer = styled.div<{ hoverState: HoverState }>`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  transition: 0.2s background-color;
  background-color: ${({ hoverState }) => {
    if (hoverState === "Check") return (props) => props.theme.colors.lightGreen;
    if (hoverState === "Cross") return (props) => props.theme.colors.lightTomato;
    return (props) => props.theme.colors.powderWhite;
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(33.6% - 10px);
  height: 250px;

  @media screen and (max-width: 900px) {
    width: calc(50% - 10px);
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  .cross {
    transition: 0.2s all;
  }

  .check {
    transition: 0.2s all;
  }

  .cross:hover {
    color: tomato;
    transform: scale(1.5);
    cursor: pointer;
  }

  .check:hover {
    color: green;
    transform: scale(1.5);
    cursor: pointer;
  }
`;

const DetailText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  flex: 1;
  -webkit-text-fit: contain; /* for Safari */
  text-fit: contain;
`;

const ButtonsContainer = styled.div`
  font-size: 40px;
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const UsernameText = styled.h2`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 25px;
  flex: 1;
  -webkit-text-fit: contain; /* for Safari */
  text-fit: contain;
`;
