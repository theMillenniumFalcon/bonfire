import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { InviteRoomForm } from "../input-forms/InviteRoomForm";
import { StandardAuthText } from "../StandardAuthText";

export interface InviteRoomCardProps { }

export const InviteRoomCard: React.FC<InviteRoomCardProps> = ({ }) => {
    return (
        <Box paddingTop={10} paddingLeft={6} paddingRight={6} backgroundColor="#151A21" borderRadius="4px" height="40vh" width="30vw" zIndex="1">
            <StandardAuthText backgroundColor="#151A21" fontSize="20px" fontWeight="600">
                Invite people
            </StandardAuthText>
            <Flex align="center" justify="center" backgroundColor="#151A21" height="80%">
                <InviteRoomForm />
            </Flex>
        </Box>
    )
}