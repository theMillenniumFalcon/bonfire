import React from "react";
import { MainWrapper } from "../wrappers/MainWrapper";
import { LeftSettingsSection } from "../section/LeftSettingsSection";
import { SettingsCentreSection } from "../section/SettingsCentreSection";

export const VoiceSettingsPage: React.FC = () => {
    return (
        <MainWrapper>
            <LeftSettingsSection />
            <SettingsCentreSection />
        </MainWrapper>
    )
}