import { Box } from "@chakra-ui/react";
import React from "react";
import { DashboardCentreSectionContentHeading } from "../headings/DashboardCentreSectionContentHeading";
import { RoomSection } from "../room/RoomSection";

export interface DashboardCentreSectionContentProps { }

export const DashboardCentreSectionContent: React.FC<DashboardCentreSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12}>
            <DashboardCentreSectionContentHeading />
            <RoomSection />
        </Box>
    )
}