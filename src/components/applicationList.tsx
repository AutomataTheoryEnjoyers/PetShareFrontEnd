import styled from "styled-components"
import { DescriptionText } from "../styles/global"
import { Announcement } from "../types/announcement"
import { Application } from "../types/application"
import { BsFillEnvelopeAtFill, BsFillTelephoneFill } from "react-icons/bs"

type UserListProps = {
    announcement: Announcement
    applications: Application[]
}

type UserProps = {
    application: Application
}

export const ApplicationListElement = ({ announcement, applications }: UserListProps) => {
    var usableApplications = applications.filter((application) => application.announcement.id === announcement.id)
    return <ApplicationListContainer>
        {usableApplications.map(application => (
            <ApplicationContainerElement application={application} />
        )
        )}
    </ApplicationListContainer>
}

const ApplicationContainerElement = ({ application }: UserProps) => {
    return <ApplicationContainer>
        <UsernameContainer>
            <UsernameText>
                {application.user.userName && application.user.userName}
                {!application.user.userName && "Default Username"}
            </UsernameText>
        </UsernameContainer>
        <MiddleContainer>
            <MiddleContainerText>
                <BsFillTelephoneFill />
                <DescriptionText> {application.user.phoneNumber}</DescriptionText>
            </MiddleContainerText>
            <MiddleContainerText>
                <BsFillEnvelopeAtFill />
                <DescriptionText> {application.user.email}</DescriptionText>
            </MiddleContainerText>
        </MiddleContainer>
        <RightContainer>
            <ButtonAccept>Accept</ButtonAccept>
            <ButtonReject>Reject</ButtonReject>
        </RightContainer>
    </ApplicationContainer>
}

const ApplicationListContainer = styled.div`
display: flex;
flex-direction: column;
align-content: space-between;
justify-content: space-around;
list-style: none;
align-items: stretch;
gap: 10px;
`
const ApplicationContainer = styled.div`
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
border-radius: 5px;
padding: 10px;
background-color: ${(props) =>
        props.theme.colors.powderWhite
    };
height: 90px;
display: flex;
`

const UsernameText = styled.h2`
margin: 0;
padding-left: 5px;
font-size: 20px;
`

const UsernameContainer = styled.div`
flex: 1;
border-right: 2px solid black;
display: flex;
align-items: center;
align-content: center;
`

const MiddleContainerText = styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
font-size: 10;
`

const MiddleContainer = styled.div`
flex: 2;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: space-around;
`

const RightContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
margin-left: 10px;
align-items: stretch;
align-content: stretch;
justify-content: space-around;
font-size: 10;
`

const ButtonAccept = styled.button`
border-radius: 5px;
padding: 5px;
background-color: ${(props) =>
        props.theme.colors.darkLemonLime
    };
color: white;
display: flex;
justify-content: center;
width: 100%;
`

const ButtonReject = styled.button`
border-radius: 5px;
padding: 5px;
margin-top: 5px;
background-color: ${(props) =>
        props.theme.colors.tomato
    };
color: white;
display: flex;
justify-content: center;
width: 100%;
`