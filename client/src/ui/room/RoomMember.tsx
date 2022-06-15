import { Flex } from "@chakra-ui/react";
import React from "react";
import { StandardUserText } from "../StandardUserText";
import { RoomMemberAvatar } from "../user-avatar/RoomMemberAvatar";

export interface RoomMemberProps { }

export const RoomMember: React.FC<RoomMemberProps> = ({ }) => {
    return (
        <Flex direction="column" align="center" backgroundColor="#151A21" cursor="pointer">
            <RoomMemberAvatar backgroundColor="#151A21" />
            <StandardUserText backgroundColor="#151A21"  fontSize="13px" color="#ffffff">Tobey</StandardUserText>
        </Flex>
    )
}