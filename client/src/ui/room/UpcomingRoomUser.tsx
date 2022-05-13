import { Flex } from "@chakra-ui/react";
import React from "react";
import { StandardLink } from "../StandardLink";
import { SectionContentAvatar } from "../user-avatar/SectionContentAvatar";

export interface UpcomingRoomUserProps { }

export const UpcomingRoomUser: React.FC<UpcomingRoomUserProps> = ({ }) => {
    return (
        <Flex align="center" backgroundColor="#151A21">
            <SectionContentAvatar
                htmlHeight="18px"
                htmlWidth="18px"
                backgroundColor="#151A21"
                marginRight="10px"
            />
            <StandardLink
                href="/"
                color='#5D7290'
                fontSize='xs'
                backgroundColor="#151A21"
                content='OGspider'
            />
        </Flex>
    )
}