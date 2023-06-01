import styled from "styled-components";
import { Link } from "../../components/navbarLink";
import { LogoutButton } from "../../components/logoutButton";

export const Navbar = () => {
  return (
    <Bar>
      <Header>PetShare-Shelter</Header>
      <Links>
        <Link name="My Announcements" path="/shelter/my-announcements" />
        <Link name="New Announcement" path="/shelter/new-announcement" />
        <Link name="My Pets" path="/shelter/my-pets" />
        <Link name="New Pet" path="/shelter/new-pet" />
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
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
