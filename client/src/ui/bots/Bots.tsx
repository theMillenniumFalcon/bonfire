import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { BotCard } from "./BotCard";

interface BotsProps { }

export const Bots: React.FC<BotsProps> = ({ }) => {
    return (
        <Box marginTop={8} width="100%">
            <SimpleGrid columns={3} spacing={10}>
                <BotCard />
                <BotCard />
                <BotCard />
                <BotCard />
                <BotCard />
                <BotCard />
            </SimpleGrid>
        </Box>
    )
}