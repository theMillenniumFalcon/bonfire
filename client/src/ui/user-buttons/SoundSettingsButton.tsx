import React from "react";
import { StandardButton } from "../StandardButton";

interface SoundSettingsButtonProps { }

export const SoundSettingsButton: React.FC<SoundSettingsButtonProps> = ({ }) => {
    return (
        <StandardButton height="28px" width="110px" content="Sound Settings" />
    )
}