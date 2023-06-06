import React, { useState } from "react";
import styled from "styled-components";
import { Report } from "../types/report";
import {
    faPhone,
    faEnvelope,
    faUser,
    faCheck,
    faTimes,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../backendUrl";
import { Title } from "../styles/global";

type HoverState = "None" | "Check" | "Cross";

type ReportProps = {
    report: Report;
};

export const ReportDetailsElement = ({ report }: ReportProps) => {
    const [showFullText, setShowFullText] = useState(false);
    const MAX_TEXT_LENGTH = 1800; // Maximum number of characters to display in truncated version

    const { reason } = report;
    const truncatedText = reason.slice(0, MAX_TEXT_LENGTH);

    const handleToggleText = () => {
        setShowFullText((prevState) => !prevState);
    };


    return (
        <Container>
            
            <div id="reportReason">
                <UsernameText>Reason:</UsernameText>
                <div>
                    {showFullText ? (
                        <p>{reason}
                        <span onClick={handleToggleText} className="show-less">
                                {" Show Less"}
                            </span>
                        </p>
                    ) : (
                        <p>
                            {truncatedText}
                            {reason.length > MAX_TEXT_LENGTH && (
                                <span onClick={handleToggleText} className="show-more">
                                       <span className="show-more-link">...Show More</span>
                                </span>
                            )}
                        </p>
                    )}
                </div>

            </div>
            
        </Container>
    );
};



const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  height: min(60vh, 600px);
  
  grid-template-areas:
    "reason"
    "reason"
    "reason";

  grid-template-columns: 1fr;
  background-color: ${(props) => props.theme.colors.powderWhite};
  justify-content: space-around;
  #reportId {
    grid-area: id;
  }

  #reportReason {
    grid-area: reason;
  }

  .show-more-link {
    color: blue;
    cursor: pointer;
    transition: color 0.3s;
  }

  .show-more-link:hover {
    color: darkblue;
  }
  .show-less {
    color: darkblue;
    cursor: pointer;
    margin-top: 8px;
    transition: color 0.3s;
  }

  .show-less:hover {
    color: blue;
  }
`;

const DetailText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  flex: 1;
  -webkit-text-fit: contain; /* for Safari */
  text-fit: contain;
`;

const UsernameText = styled.h2`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 25px;
  flex: 1;
  -webkit-text-fit: contain; /* for Safari */
  text-fit: contain;
`;
