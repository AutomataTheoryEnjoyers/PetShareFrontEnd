import styled from "styled-components";
import { Link } from "react-router-dom";
import { User } from "../types/user";
import { Title } from "../styles/global";
import { faArrowRight, faEnvelope, faHouse, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    user: User;
};

export const UserListElement = ({ user }: Props) => {
    return (
        <LinkStyled to={`${user.id}`}>
            <Container>
                <LeftContainer>
                    <IconContainer>
                        <FontAwesomeIcon icon={faUser} size="3x" />
                    </IconContainer>
                    <TextContainer>
                        <TitleContainer>
                            <Title>{user.userName}</Title>
                        </TitleContainer>
                        <BottomText><FontAwesomeIcon icon={faEnvelope} /><span>{user.email}{" "}</span>
                            <FontAwesomeIcon icon={faPhone} />{user.phoneNumber}{" "}{<FontAwesomeIcon icon={faHouse} />}
                            {user.address.country},{" "} {user.address.city}
                        </BottomText>
                    </TextContainer>
                </LeftContainer>
                <RightContainer>
                    <FontAwesomeIcon className="right-arrow" fontSize={30} icon={faArrowRight} />
                </RightContainer>
            </Container>
        </LinkStyled>
    );
};

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Container = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.powderWhite};
  height: 150px;
  display: flex;
  transition: all 0.2s ease-in;

  .right-arrow {
    opacity: 0;
    transition: all 0.2s ease-in;
    justify-content: center;
    margin-right: 50px;
  }

  :hover {
    top: -10px;
    transform: scale(1.05);
    z-axis: 1000;
    .right-arrow {
      opacity: 1;
      margin-right: 0;
    }
    background-color: ${(props) => props.theme.colors.lightGreen};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  margin-top: -10px;
`;

const BottomText = styled.p`
  margin: 0;
  text-align: left;
  padding: 5px;
  color: ${(props) => props.theme.colors.darkgrey};
  align-self: flex-end;

  svg {
    margin-right: 5px; /* Add margin to create space between the envelope icon and email */
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
`;
