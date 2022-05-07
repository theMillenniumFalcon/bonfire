import React from "react";
import { UserCentreSection } from "../sections/UserCentreSection";
import { LeftSection } from "../sections/LeftSection";
import { RightSection } from "../sections/RightSection";
import { MainWrapper } from "../wrappers/MainWrapper";

export interface RoomPageProps { }

export const RoomPage: React.FC<RoomPageProps> = ({ }) => {
    return (
        <MainWrapper>
            <LeftSection />
            <UserCentreSection />
            <RightSection />
        </MainWrapper>
    )
}