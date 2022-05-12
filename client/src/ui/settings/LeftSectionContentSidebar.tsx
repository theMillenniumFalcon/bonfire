import { Box } from "@chakra-ui/react";
import React from "react";
import { PrivacySettingsSidebar } from "./PrivacySettingsSidebar";
import { SoundSettingsSidebar } from "./SoundSettingsSidebar";
import { VoiceSettingsSidebar } from "./VoiceSettingsSidebar";

export interface LeftSectionContentSidebarProps { }

export const LeftSectionContentSidebar: React.FC<LeftSectionContentSidebarProps> = ({ }) => {
    return (
        <Box marginTop="30px">
            <VoiceSettingsSidebar />
            <SoundSettingsSidebar />
            <PrivacySettingsSidebar />
        </Box>
    )
}