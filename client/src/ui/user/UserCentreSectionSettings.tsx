import { Flex } from "@chakra-ui/react";
import React from "react";
import { PrivacySettingsButton } from "../user-buttons/PrivacySettingsButton";
import { SoundSettingsButton } from "../user-buttons/SoundSettingsButton";
import { VoiceSettingsButton } from "../user-buttons/VoiceSettingsButton";

export interface UserCentreSectionSettingsProps { }

export const UserCentreSectionSettings: React.FC<UserCentreSectionSettingsProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" height="40px" width="65%" color="#ffffff" p={3} marginTop={4}>
            <VoiceSettingsButton />
            <SoundSettingsButton />
            <PrivacySettingsButton />
        </Flex>
    )
}