import { Box } from "@chakra-ui/react";
import React from "react";
import { Bots } from "../bots/Bots";
import { DeveloperCentreSectionContentHeading } from "../headings/DeveloperCentreSectionContentHeading";

export interface DeveloperCentreSectionContentProps { }

export const DeveloperCentreSectionContent: React.FC<DeveloperCentreSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12}>
            <DeveloperCentreSectionContentHeading />
            <Bots />
        </Box>
    )
}