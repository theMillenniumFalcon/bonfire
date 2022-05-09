import { Box } from "@chakra-ui/react";
import React from "react";
import { CentreSectionRoomCard } from "../room/CentreSectionRoomCard";

export interface RoomCentreSectionContentProps { }

export const RoomCentreSectionContent: React.FC<RoomCentreSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12}>
            <CentreSectionRoomCard />
        </Box>
    )
}