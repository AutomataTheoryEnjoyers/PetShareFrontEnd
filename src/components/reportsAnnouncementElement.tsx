import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { Announcement } from "../types/announcement";

type Props = {
    announcement: Announcement,
    isFollowed?: boolean,
    isShelter?: boolean,
};

export const ReportAnnouncementDetailsElement = ({ announcement, isFollowed = true, isShelter }: Props) => {

    return (
        <Container>
            <TopContainer>
                <TopContainerLeft>
                    <TextDetails>
                        Created: {announcement.creationDate.toDateString()}
                    </TextDetails>
                    <TextDetails>
                        Last Update: {announcement.lastUpdateDate.toDateString()}
                    </TextDetails>
                </TopContainerLeft>
            </TopContainer>
            <Title>{announcement.title && announcement.title}</Title>
            <DescriptionText>
                {announcement.description && announcement.description}
            </DescriptionText>
            <BottomContainer>
                <Separator />
                <AnnouncementIdContainer>ID: {announcement.id}</AnnouncementIdContainer>
            </BottomContainer>
        </Container>
    );
};

const Container = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 12px;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.colors.powderWhite};
  text-align: left;
  height: 100%;
  height: min(60vh, 600px);
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: space-between;
`;
const TopContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DescriptionText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 160px;
`;

const Separator = styled.hr`
  width: 100%;
  height: 3px;
  background-color: black;
  margin-bottom: 0;
`;

const AnnouncementIdContainer = styled.div`
  padding: 5px;
  font-size: 10px;
`;

const TextDetails = styled.p`
  margin: 0;
  padding: 2px;
  font-size: 15px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 5px;
  font-size: 20px;
`;