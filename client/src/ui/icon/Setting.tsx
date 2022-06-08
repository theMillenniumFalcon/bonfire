import React from "react";
import { SettingsIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router";

export interface SettingProps { }

export const Setting: React.FC<SettingProps> = ({ }) => {
    const router = useRouter()
    return (
        <SettingsIcon color="#ffffff" w="20px" h="20px" cursor="pointer" onClick={() => router.push('/settings/voice')} />
    )
}