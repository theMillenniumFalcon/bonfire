import { Flex } from "@chakra-ui/react";
import React from "react";
import { BotsEditCard } from "./BotsEditCard";

export interface BotsEditSectionProps { }

export const BotsEditSection: React.FC<BotsEditSectionProps> = ({ }) => {
    return (
        <Flex align="center" justify="center" height="100%">
            <BotsEditCard />
        </Flex>
    )
}