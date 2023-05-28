import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { useTimer } from "react-timer-hook";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export const AccountSuccessfullyCreated = () => {
  const { isAuthenticated, logout } = useAuth0();
  const timestamp = new Date();
  timestamp.setSeconds(timestamp.getSeconds() + 2);
  const { start } = useTimer({
    expiryTimestamp: timestamp,
    onExpire: () => {
      if (isAuthenticated) logout();
    },
  });

  start();

  return (
    <AnimatedPage>
      {!isAuthenticated && <Navigate to={"/announcements"} />}
      <Header>Account successfully created. You will now be logged out.</Header>
      <Header>Log in again to use the service.</Header>
    </AnimatedPage>
  );
};

const Header = styled.h1`
  text-align: left;
  display: block;
  margin: 3px;
  font-weight: 400;
`;
