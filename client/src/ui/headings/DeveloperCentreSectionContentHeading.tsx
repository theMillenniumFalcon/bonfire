import { Heading, Flex } from "@chakra-ui/react";
import React from "react";

export interface DeveloperCentreSectionContentHeadingProps { }

export const DeveloperCentreSectionContentHeading: React.FC<DeveloperCentreSectionContentHeadingProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" width="100%" height="40px" color="#ffffff">
            <Heading as='h4' size='md' marginLeft={6}>
                Your Bots
            </Heading>
        </Flex>
    )
}