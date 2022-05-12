import { Box } from "@chakra-ui/react";
import React from "react";
import { LeftSettingsSectionContentHeading } from "../headings/LeftSettingsSectionContentHeading";
import { LeftSectionContentSidebar } from "../settings/LeftSectionContentSidebar";

export interface LeftSettingsSectionContentProps { }

export const LeftSettingsSectionContent: React.FC<LeftSettingsSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12}>
            <LeftSettingsSectionContentHeading />
            <LeftSectionContentSidebar />
        </Box>
    )
}