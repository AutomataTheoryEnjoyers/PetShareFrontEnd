import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

export const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <LinkContainer onClick={() => loginWithRedirect()}>
          Sign in
        </LinkContainer>
      )}
    </>
  );
};

const LinkContainer = styled.a<{ isActive?: boolean }>`
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
  transition: all 0.2s;
  font-weight: 700;
  display: grid;
  place-items: center;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
