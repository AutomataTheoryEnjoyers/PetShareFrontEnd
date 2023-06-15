import React, { useState } from "react";
import styled from "styled-components";
import { User } from "../types/user";
import {
    faPhone,
    faEnvelope,
    faUser,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HoverState = "None" | "Check" | "Cross";

type UserProps = {
    user: User;
};

export const UserDetailsElement = ({ user }: UserProps) => {
    const [hoverState, setHoverState] = useState("None" as HoverState);

    return (
        <ApplicationContainer
            hoverState={hoverState}
            onMouseEnter={() => setHoverState("Check")}
            onMouseLeave={() => setHoverState("None")}
        >
            <UsernameText>
                {user.userName} <FontAwesomeIcon icon={faUser} />
            </UsernameText>
            <DetailText>
                <FontAwesomeIcon icon={faPhone} />{" "}
                {user.phoneNumber}
            </DetailText>
            <DetailText>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                {user.email}
            </DetailText>
            <DetailText>
                <FontAwesomeIcon icon={faHouse} />
             
            </DetailText>
            <DetailText>
                
                {user.address.street}
            </DetailText>
            <DetailText>
                {user.address.postalCode}, {" "} {user.address.city}
            </DetailText>
            <DetailText>
                {user.address?.province}, {" "} {user.address.country} 
            </DetailText>
            <DetailText>
                {user.status === 0 ? "This user's account is active" : user.status === 1 ? "This user's account has been blocked" : 
                "This user's account has been deleted"}
            </DetailText>
        </ApplicationContainer>
    );
};

const ApplicationContainer = styled.div<{ hoverState: HoverState }>`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  transition: 0.2s background-color;
  background-color: ${({ hoverState }) =>
    hoverState === "None" ? "#f5f5f5" : hoverState === "Check" ? "lightblue" : "tomato"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 450px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    width: calc(50% - 10px);
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const DetailText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  flex: 1;
  -webkit-text-fit: contain; /* for Safari */
  text-fit: contain;
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
