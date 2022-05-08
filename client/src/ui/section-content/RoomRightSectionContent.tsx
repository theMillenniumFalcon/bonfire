import { Box } from "@chakra-ui/react";
import React from "react";
import { RightSectionRoomCard } from "../room/RightSectionRoomCard";

export interface RoomRightSectionContentProps { }

export const RoomRightSectionContent: React.FC<RoomRightSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12} height="80vh">
            <RightSectionRoomCard />
        </Box>
    )
}