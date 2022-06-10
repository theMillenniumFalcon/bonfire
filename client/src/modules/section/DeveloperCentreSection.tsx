import { Box } from "@chakra-ui/react";
import React from "react";
import { DeveloperCentre } from "../../ui/section/DeveloperCentre";

export interface DeveloperCentreSectionProps { }

export const DeveloperCentreSection: React.FC<DeveloperCentreSectionProps> = ({ }) => {
    return (
        <Box w="50%" paddingLeft={2} paddingRight={2}>
            <DeveloperCentre />
        </Box>
    )
}