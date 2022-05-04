import React from "react";
import { SettingsIcon } from '@chakra-ui/icons'

export interface SettingProps { }

export const Setting: React.FC<SettingProps> = ({ }) => {
    return (
        <SettingsIcon color="#ffffff" w="20px" h="20px" />
    )
}