import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  path: string;
  name: string;
};

export const Link = ({ path, name }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname.includes(path);
  return (
    <LinkContainer isActive={isActive} onClick={() => navigate(path)}>
      {name}
    </LinkContainer>
  );
};

const LinkContainer = styled.a<{ isActive?: boolean }>`
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
  transition: all 0.2s;
  font-weight: ${({ isActive }) => (isActive ? "700" : "400")};
  display: grid;
  place-items: center;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
