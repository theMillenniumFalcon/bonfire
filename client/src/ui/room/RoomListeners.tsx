import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { StandardRoomText } from "../StandardRoomText";
import { RoomMember } from "./RoomMember";

export interface RoomListenersProps { }

export const RoomListeners: React.FC<RoomListenersProps> = ({ }) => {
    return (
        <Box backgroundColor="#151A21">
            <StandardRoomText backgroundColor="#151A21" color="#ffffff" fontSize="17px" fontWeight="700">
                Listeners
            </StandardRoomText>
            <SimpleGrid columns={5} spacing={10} backgroundColor="#151A21" p={3}>
                <RoomMember />
                <RoomMember />
                <RoomMember />
                <RoomMember />
                <RoomMember />
                <RoomMember />
                <RoomMember />
            </SimpleGrid>
        </Box>
    )
}