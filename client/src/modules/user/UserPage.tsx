import React from "react";
import { UserCentreSection } from "../sections/UserCentreSection";
import { LeftSection } from "../sections/LeftSection";
import { RightSection } from "../sections/RightSection";
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