import { Flex } from "@chakra-ui/react";
import React from "react";
import { StandardBubble } from "../StandardBubble";
import { StandardRoomText } from "../StandardRoomText";

interface UpcomingRoomTimeProps { }

export const UpcomingRoomTime: React.FC<UpcomingRoomTimeProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" backgroundColor="#151A21">
            <StandardBubble color="#5D7290" marginRight="10px" backgroundColor="#151A21" />
            <StandardRoomText color="#B2BDCD" fontWeight="bold" backgroundColor="#151A21">
                1:30 PM
            </StandardRoomText>
        </Flex>
    )
}