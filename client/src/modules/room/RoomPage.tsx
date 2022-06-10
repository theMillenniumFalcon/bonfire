import React from "react";
import { LeftSection } from "../section/LeftSection";
import { MainWrapper } from "../wrappers/MainWrapper";
import { RoomCentreSection } from "../section/RoomCentreSection";
import { RoomRightSection } from "../section/RoomRightSection";

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