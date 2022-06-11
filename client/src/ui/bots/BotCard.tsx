import { Box } from "@chakra-ui/react";
import React from "react";

interface BotCardProps { }

export const BotCard: React.FC<BotCardProps> = ({ }) => {
    return (
        <Box p={5} backgroundColor="#151A21" borderRadius="4px" color="white">
            Hello
        </Box>
    )
}