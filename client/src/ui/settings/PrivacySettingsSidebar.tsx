import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export interface PrivacySettingsSidebarProps { }

export const PrivacySettingsSidebar: React.FC<PrivacySettingsSidebarProps> = ({ }) => {
    const router = useRouter()
    const setting = ((router.asPath.split('/')[2]) as unknown) as string
    return (
        <Flex
            p={2}
            marginTop="5px"
            color="#ffffff"
            border={String(setting) === "privacy" ? "#151A21" : "#0B0E11"}
            borderRadius="5px"
            fontSize="17px"
            fontWeight="500"
            backgroundColor={String(setting) === "privacy" ? "#151A21" : "#0B0E11"}
            cursor="pointer"
            onClick={() => router.push('/settings/privacy')}
            _hover={{
                background: "#151A21",
                borderColor: "#0B0E11"
            }}>
            Privacy Settings
        </Flex>
    )
}