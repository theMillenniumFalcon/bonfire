import { Flex } from "@chakra-ui/react";
import React from "react";

interface BotCardProps { }

export const BotCard: React.FC<BotCardProps> = ({ }) => {
    return (
        <Flex p={4} backgroundColor="#151A21" borderRadius="4px" color="white" justify="center" align="center">
            Hello
        </Flex>
    )
}