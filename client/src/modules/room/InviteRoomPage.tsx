import React from "react";
import { LeftSection } from "../sections/LeftSection";
import { MainWrapper } from "../wrappers/MainWrapper";
import { RoomCentreSection } from "../sections/RoomCentreSection";
import { RoomRightSection } from "../sections/RoomRightSection";

export interface InviteRoomPageProps { }

export const InviteRoomPage: React.FC<InviteRoomPageProps> = ({ }) => {
    return (
        <MainWrapper>
            <LeftSection />
            <RoomCentreSection />
            <RoomRightSection />
        </MainWrapper>
    )
}