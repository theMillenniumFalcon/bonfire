import { Flex } from "@chakra-ui/react";
import React from "react";
import { CreateNewRoomCard } from "./CreateNewRoomCard";

export interface CreateNewRoomSectionProps { }

export const CreateNewRoomSection: React.FC<CreateNewRoomSectionProps> = ({ }) => {
    return (
        <Flex align="center" justify="center" height="100%">
            <CreateNewRoomCard />
        </Flex>
    )
}