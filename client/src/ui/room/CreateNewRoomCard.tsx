import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { CreateNewRoomForm } from "../input-forms/CreateNewRoomForm";
import { StandardAuthText } from "../StandardAuthText";

export interface CreateNewRoomCardProps { }

export const CreateNewRoomCard: React.FC<CreateNewRoomCardProps> = ({ }) => {
    return (
        <Box paddingTop={10} paddingLeft={6} paddingRight={6} backgroundColor="#151A21" borderRadius="4px" height="50vh" width="30vw" zIndex="1">
            <StandardAuthText color="#ffffff" backgroundColor="#151A21" fontSize="20px" fontWeight="600">
                Create a new Room
            </StandardAuthText>
            <Flex align="center" justify="center" backgroundColor="#151A21" height="80%">
                <CreateNewRoomForm />
            </Flex>
        </Box>
    )
}