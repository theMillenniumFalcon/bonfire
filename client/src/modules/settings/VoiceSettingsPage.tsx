import React from "react";
import { MainWrapper } from "../wrappers/MainWrapper";
import { LeftSettingsSection } from "../sections/LeftSettingsSection";
import { SettingsCentreSection } from "../sections/SettingsCentreSection";

export const VoiceSettingsPage: React.FC = () => {
    return (
        <MainWrapper>
            <LeftSettingsSection />
            <SettingsCentreSection />
        </MainWrapper>
    )
}