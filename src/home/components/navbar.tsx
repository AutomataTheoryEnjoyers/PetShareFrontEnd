import styled from "styled-components";
import { LoginButton } from "../../components/loginButton";
import { LogoutButton } from "../../components/logoutButton";
import { Link } from "../../components/navbarLink";

export const Navbar = () => {
  return (
    <Bar>
      <Header>PetShare</Header>
      <Links>
        <Link name="Announcements" path="/announcements" />
        <LoginButton />
        <LogoutButton />
      </Links>
    </Bar>
  );
};

const Links = styled.div`
  margin-left: auto;
  display: flex;
  align-items: stretch;
`;

const Header = styled.h1`
  font-size: 30px;
  font-weight: 400;
  margin: 20px;
  margin-left: 20px;
  opacity: 0.7;
`;

const Bar = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.colors.main};
  align-items: stretch;
  justify-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
