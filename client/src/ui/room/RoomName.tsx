import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Time } from "../icon/Time";
import { StandardRoomText } from "../StandardRoomText";

interface RoomNameProps { }

export const RoomName: React.FC<RoomNameProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" backgroundColor="#151A21">
            <Time />
            <StandardRoomText color="#ffffff" fontWeight="bold">
                Chill talks
            </StandardRoomText>
        </Flex>
    )
}