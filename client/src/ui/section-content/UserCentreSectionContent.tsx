import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { PrivacySettings } from "../settings/PrivacySettings";
import { SoundSettings } from "../settings/SoundSettings";
import { VoiceSettings } from "../settings/VoiceSettings";

export interface UserCentreSectionContentProps { }

export const UserCentreSectionContent: React.FC<UserCentreSectionContentProps> = ({ }) => {
    const router = useRouter()
    const setting = ((router.asPath.split('/')[2]) as unknown) as string
    let body = null
    if (String(setting) === "voice") {
        body = (
            <VoiceSettings />
        )
    } else if (String(setting) === "sound") {
        body = (
            <SoundSettings />
        )
    } else if (String(setting) === "privacy") {
        body = (
            <PrivacySettings />
        )
    }
    return (
        <Box marginTop={12}>
            {body}
        </Box>
    )
}