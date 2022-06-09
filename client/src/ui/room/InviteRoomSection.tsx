import { Flex } from "@chakra-ui/react";
import React from "react";
import { InviteRoomCard } from "./InviteRoomCard";

export interface InviteRoomSectionProps { }

export const InviteRoomSection: React.FC<InviteRoomSectionProps> = ({ }) => {
    return (
        <Flex align="center" justify="center" height="100%">
            <InviteRoomCard />
        </Flex>
    )
}