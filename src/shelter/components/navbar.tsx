import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"

export const Navbar = () => {
  return <Bar>
    <Header>PetShare</Header>
    <Links>
      <Link name="My Announcements" path="/shelter/my-announcements" />
      <Link name="New Announcement" path="/shelter/new-announcement" />
    </Links>
  </Bar>
}

type LinkProps = {
  path: string,
  name: string,
}

const Link = ({ path, name }: LinkProps) => {
  const location = useLocation();
  const navigate = useNavigate()
  const isActive = location.pathname === path;
  return <LinkContainer isActive={isActive} onClick={() => navigate(path)}>{name}</LinkContainer>
}

const Links = styled.div`
  margin-left: auto;
  display: flex;
  align-items: stretch;
`

const Header = styled.h1`
  font-size: 30px;
  font-weight: 400;
  margin: 20px;
  margin-left: 20px;
  opacity: 0.7;
`

const LinkContainer = styled.a<{ isActive?: boolean }>`
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
  transition: all 0.2s;
  font-weight: ${({ isActive }) => isActive ? "700" : "400"};
  display: grid;
  place-items: center;
  cursor: pointer;

  :hover{
    background-color: rgba(255,255,255, 0.1);
  }
`

const Bar = styled.nav`
  display: flex;
  background-color: ${(props) =>
    props.theme.colors.main
  };
  align-items: stretch;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`
