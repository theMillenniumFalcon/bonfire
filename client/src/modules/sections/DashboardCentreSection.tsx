import { Box } from "@chakra-ui/react";
import React from "react";
import { DashboardCentreHeader } from "../../ui/header/DashboardCentreHeader";

export interface DashboardCentreSectionProps { }

export const DashboardCentreSection: React.FC<DashboardCentreSectionProps> = ({ }) => {
    return (
        <Box w="50%" paddingLeft={2} paddingRight={2}>
            <DashboardCentreHeader />
        </Box>
    )
}