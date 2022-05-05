import { Heading, Flex } from "@chakra-ui/react";
import React from "react";
import { StandardButton } from "../StandardButton";

export interface CentreSectionContentHeadingProps { }

export const CentreSectionContentHeading: React.FC<CentreSectionContentHeadingProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" width="100%" height="40px" color="#ffffff">
            <Heading as='h4' size='md' marginLeft={8}>
                Your Feed
            </Heading>
            <StandardButton />
        </Flex>
    )
}