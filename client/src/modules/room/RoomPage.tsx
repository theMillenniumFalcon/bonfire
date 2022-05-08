import React from "react";
import { LeftSection } from "../sections/LeftSection";
import { MainWrapper } from "../wrappers/MainWrapper";
import { RoomCentreSection } from "../sections/RoomCentreSection";
import { RoomRightSection } from "../sections/RoomRightSection";

export interface RoomPageProps { }

export const RoomPage: React.FC<RoomPageProps> = ({ }) => {
    return (
        <MainWrapper>
            <LeftSection />
            <RoomCentreSection />
            <RoomRightSection />
        </MainWrapper>
    )
}