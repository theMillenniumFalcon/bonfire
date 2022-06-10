import { Flex } from "@chakra-ui/react";
import React from "react";
import { BotCard } from "./BotCard";

interface BotsProps { }

export const Bots: React.FC<BotsProps> = ({ }) => {
    return (
        <Flex marginTop={8} width="100%">
            <BotCard />
        </Flex>
    )
}