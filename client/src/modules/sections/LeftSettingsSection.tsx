import { Box } from "@chakra-ui/react";
import React from "react";
import { LeftHeader } from "../../ui/header/LeftHeader";
import { LeftSettingsSectionContent } from "../../ui/section-content/LeftSettingsSectionContent";

export interface LeftSettingsSectionProps { }

export const LeftSettingsSection: React.FC<LeftSettingsSectionProps> = ({ }) => {
    return (
        <Box w="20%" paddingLeft={2} paddingRight={2} height="100%">
            <LeftHeader />
            <LeftSettingsSectionContent />
        </Box>
    )
}