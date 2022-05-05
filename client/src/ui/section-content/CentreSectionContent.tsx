import { Box } from "@chakra-ui/react";
import React from "react";
import { CentreSectionContentHeading } from "../headings/CentreSectionContentHeading";
import { RoomSection } from "../room/RoomSection";

export interface CentreSectionContentProps { }

export const CentreSectionContent: React.FC<CentreSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12}>
            <CentreSectionContentHeading />
            <RoomSection />
        </Box>
    )
}