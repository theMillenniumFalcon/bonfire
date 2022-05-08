import { Box } from "@chakra-ui/react";
import React from "react";
import { DashboardCentre } from "../../ui/section/DashboardCentre";

export interface DashboardCentreSectionProps { }

export const DashboardCentreSection: React.FC<DashboardCentreSectionProps> = ({ }) => {
    return (
        <Box w="50%" paddingLeft={2} paddingRight={2}>
            <DashboardCentre />
        </Box>
    )
}