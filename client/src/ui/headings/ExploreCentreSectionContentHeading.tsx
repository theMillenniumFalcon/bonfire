import { Heading, Flex } from "@chakra-ui/react";
import React from "react";

export interface ExploreCentreSectionContentHeadingProps { }

export const ExploreCentreSectionContentHeading: React.FC<ExploreCentreSectionContentHeadingProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" width="100%" height="40px" color="#ffffff">
            <Heading as='h4' size='md' marginLeft={6}>
                Explore rooms suiting your interest
            </Heading>
        </Flex>
    )
}