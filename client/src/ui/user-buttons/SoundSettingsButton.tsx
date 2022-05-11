import React from "react";
import { StandardButton } from "../StandardButton";
import { useRouter } from 'next/router'

interface SoundSettingsButtonProps { }

export const SoundSettingsButton: React.FC<SoundSettingsButtonProps> = ({ }) => {
    const router = useRouter()
    return (
        <StandardButton
            height="28px"
            width="110px"
            content="Sound Settings"
            onClick={() => router.push('/sound-settings')}
        />
    )
}