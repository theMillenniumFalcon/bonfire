import { Box } from "@chakra-ui/react";
import React from "react";
import { RoomListeners } from "./RoomListeners";
import { RoomSpeakers } from "./RoomSpeakers";

export interface RoomCardMembersProps { }

export const RoomCardMembers: React.FC<RoomCardMembersProps> = ({ }) => {
    return (
        <Box p={5} height="72%" backgroundColor="#151A21" color="white">
            <RoomSpeakers />
            <RoomListeners />
        </Box>
    )
}