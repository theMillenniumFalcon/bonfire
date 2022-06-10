import React from "react";
import { UserCentreSection } from "../section/UserCentreSection";
import { LeftSection } from "../section/LeftSection";
import { RightSection } from "../section/RightSection";
import { MainWrapper } from "../wrappers/MainWrapper";

export interface UserPageProps { }

export const UserPage: React.FC<UserPageProps> = ({ }) => {
    return (
        <MainWrapper>
            <LeftSection />
            <UserCentreSection />
            <RightSection />
        </MainWrapper>
    )
}