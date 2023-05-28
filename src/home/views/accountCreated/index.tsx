import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const AccountSuccessfullyCreated = () => {
  const { isAuthenticated, logout } = useAuth0();
  const [countdownEnded, setCountdownEnded] = useState<Boolean>(false);
  const countdownTime = 3000; // in milliseconds

  useEffect(() => {
    if (countdownEnded === false) {
      setInterval(() => {
        setCountdownEnded(true);
        if (isAuthenticated) logout();
      }, countdownTime);
    }
  });

  return (
    <AnimatedPage>
      {(!isAuthenticated || countdownEnded) && (
        <Navigate to={"/announcements"} />
      )}
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
