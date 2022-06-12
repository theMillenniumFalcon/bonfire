import React from "react";
import { StandardButton } from "../StandardButton";
import { useRouter } from 'next/router'

interface ProfileSettingsButtonProps { }

export const ProfileSettingsButton: React.FC<ProfileSettingsButtonProps> = ({ }) => {
    const router = useRouter()
    return (
        <StandardButton
            height="28px"
            width="110px"
            content="Profile Settings"
            onClick={() => router.push('/settings/profile')}
        />
    )
}