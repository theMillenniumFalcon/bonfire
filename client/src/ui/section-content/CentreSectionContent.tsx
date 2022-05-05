import { Box } from "@chakra-ui/react";
import React from "react";
import { CentreSectionContentHeading } from "../headings/CentreSectionContentHeading";

export interface CentreSectionContentProps { }

export const CentreSectionContent: React.FC<CentreSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12}>
            <CentreSectionContentHeading />
        </Box>
    )
}