import styled from "styled-components";
import { Report } from "../types/report";
import { ClipLoader } from "react-spinners";
import { AnimatedPage } from "../components/animatedPage";
import { useGetUserSingle } from "./queries/getUserSingle";
import { UserDetailsElement } from "../components/userDetailsElement";

type Props = {
    report: Report;
};

export const UserDetailsInReportElement = ({ report }: Props) => {
    const user = useGetUserSingle(report.targetId);
    if (user.isLoading) {
        return (
            <AnimatedPage>
                <CenteredBox>
                    <ClipLoader />
                </CenteredBox>
            </AnimatedPage>
        );
    }
    return (
        user && <UserDetailsElement user={user.data!}></UserDetailsElement>
    );
};


const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;

