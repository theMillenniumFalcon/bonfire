import React from "react";
import { StandardButton } from "../StandardButton";

interface VoiceSettingsButtonProps { }

export const VoiceSettingsButton: React.FC<VoiceSettingsButtonProps> = ({ }) => {
    return (
        <StandardButton height="28px" width="110px" content="Voice Settings" />
    )
}