import { Heading } from "@chakra-ui/react";
import React from "react";

export interface LeftSectionContentHeadingProps { }

export const LeftSectionContentHeading: React.FC<LeftSectionContentHeadingProps> = ({ }) => {
    return (
        <Heading as='h4' size='md' color="#ffffff">
            People
        </Heading>
    )
}