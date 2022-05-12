import React from "react";
import { StandardButton } from "../StandardButton";
import { useRouter } from 'next/router'

interface PrivacySettingsButtonProps { }

export const PrivacySettingsButton: React.FC<PrivacySettingsButtonProps> = ({ }) => {
    const router = useRouter()
    return (
        <StandardButton
            height="28px"
            width="110px"
            content="Privacy Settings"
            onClick={() => router.push('/settings/privacy')}
        />
    )
}