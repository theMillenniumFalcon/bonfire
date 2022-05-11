import { Flex } from "@chakra-ui/react";
import React from "react";
import { StandardLink } from "../StandardLink";

interface UpcomingRoomsExploreProps { }

export const UpcomingRoomsExplore: React.FC<UpcomingRoomsExploreProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" p={5} backgroundColor="#242C37" height="5%">
            <StandardLink
                href="/explore"
                color='#ffffff'
                backgroundColor="#242C37"
                fontSize='md'
                content='Explore more rooms' />
        </Flex>
    )
}