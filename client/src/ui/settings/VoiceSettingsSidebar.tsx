import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export interface VoiceSettingsSidebarProps { }

export const VoiceSettingsSidebar: React.FC<VoiceSettingsSidebarProps> = ({ }) => {
    const router = useRouter()
    const setting = ((router.asPath.split('/')[2]) as unknown) as string
    return (
        <Flex
            p={2}
            color="#ffffff"
            border={String(setting) === "voice" ? "#151A21" : "#0B0E11"}
            borderRadius="5px"
            fontSize="17px"
            fontWeight="500"
            backgroundColor={String(setting) === "voice" ? "#151A21" : "#0B0E11"}
            cursor="pointer"
            onClick={() => router.push('/settings/voice')}
            _hover={{
                background: "#151A21",
                borderColor: "#0B0E11"
            }}>
            Voice Settings
        </Flex>
    )
}