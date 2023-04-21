import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

export function LogoutButton() {
    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    return (
        <>
            {isAuthenticated && (
                <LinkContainer onClick={() => logout()}>Sign out</LinkContainer>)}
        </>
    );
}

const LinkContainer = styled.a<{ isActive?: boolean }>`
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
  transition: all 0.2s;
  font-weight: 700;
  color: ${(props) => props.theme.colors.powderWhite};
  display: grid;
  place-items: center;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;