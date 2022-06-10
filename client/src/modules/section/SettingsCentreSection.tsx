import { Box } from "@chakra-ui/react";
import React from "react";
import { SettingsCentre } from "../../ui/section/SettingsCentre";

export interface SettingsCentreSectionProps { }

export const SettingsCentreSection: React.FC<SettingsCentreSectionProps> = ({ }) => {
    return (
        <Box w="65%" paddingLeft={2} paddingRight={2}>
            <SettingsCentre />
        </Box>
    )
}