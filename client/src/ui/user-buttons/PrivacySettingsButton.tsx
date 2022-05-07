import React from "react";
import { StandardButton } from "../StandardButton";

interface PrivacySettingsButtonProps { }

export const PrivacySettingsButton: React.FC<PrivacySettingsButtonProps> = ({ }) => {
    return (
        <StandardButton height="28px" width="110px" content="Privacy Settings" />
    )
}