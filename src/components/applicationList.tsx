import styled from "styled-components"
import { Announcement } from "../types/announcement"
import { Application } from "../types/application"
import { ApplicationContainerElement } from "./applicationListElement"

type UserListProps = {
    announcement: Announcement
    applications: Application[]
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

const ApplicationListContainer = styled.div`
display: flex;
flex-direction: column;
align-content: space-between;
justify-content: space-around;
list-style: none;
align-items: stretch;
gap: 10px;
`