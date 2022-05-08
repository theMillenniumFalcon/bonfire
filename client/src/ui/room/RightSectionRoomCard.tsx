import { Box } from "@chakra-ui/react";
import React from "react";
import { RoomChatInput } from "../input-field/RoomChatInput";

export interface RightSectionRoomCardProps { }

export const RightSectionRoomCard: React.FC<RightSectionRoomCardProps> = ({ }) => {
    return (
        <Box p={4} backgroundColor="#151A21" borderRadius="4px" height="100%">
            hello
            <RoomChatInput />
        </Box>
    )
}