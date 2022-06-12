import { Box } from "@chakra-ui/react";
import React from "react";
import { PrivacySettingsSidebar } from "./PrivacySettingsSidebar";
import { ProfileSettingsSidebar } from "./ProfileSettingsSidebar";
import { SoundSettingsSidebar } from "./SoundSettingsSidebar";
import { VoiceSettingsSidebar } from "./VoiceSettingsSidebar";

export interface LeftSectionContentSidebarProps { }

export const LeftSectionContentSidebar: React.FC<LeftSectionContentSidebarProps> = ({ }) => {
    return (
        <Box marginTop="30px">
            <ProfileSettingsSidebar />
            <VoiceSettingsSidebar />
            <SoundSettingsSidebar />
            <PrivacySettingsSidebar />
        </Box>
    )
}