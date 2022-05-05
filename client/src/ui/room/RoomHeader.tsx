import { Flex } from "@chakra-ui/react";
import React from "react";
import { RoomName } from "./RoomName";
import { UpcomingRoomTime } from "./UpcomingRoomTime";

interface RoomHeaderProps { }

export const RoomHeader: React.FC<RoomHeaderProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" w="100%" h="25px" backgroundColor="#151A21">
            <RoomName />
            <UpcomingRoomTime />
        </Flex>
    )
}