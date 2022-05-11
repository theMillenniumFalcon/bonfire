import React from "react";
import { StandardButton } from "../StandardButton";
import { useRouter } from 'next/router'

interface VoiceSettingsButtonProps { }

export const VoiceSettingsButton: React.FC<VoiceSettingsButtonProps> = ({ }) => {
    const router = useRouter()
    return (
        <StandardButton
            height="28px"
            width="110px"
            content="Voice Settings"
            onClick={() => router.push('/voice-settings')}
        />
    )
}