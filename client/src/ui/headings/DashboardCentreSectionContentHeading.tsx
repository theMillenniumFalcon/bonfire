import { Heading, Flex } from "@chakra-ui/react";
import React from "react";
import { StandardButton } from "../StandardButton";

export interface DashboardCentreSectionContentHeadingProps { }

export const DashboardCentreSectionContentHeading: React.FC<DashboardCentreSectionContentHeadingProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" width="100%" height="40px" color="#ffffff">
            <Heading as='h4' size='md' marginLeft={6}>
                Your Feed
            </Heading>
            <StandardButton height="38px" width="120px" content="New Room" />
        </Flex>
    )
}