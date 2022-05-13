import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export interface LeftSettingsSectionContentHeadingProps { }

export const LeftSettingsSectionContentHeading: React.FC<LeftSettingsSectionContentHeadingProps> = ({ }) => {
    const router = useRouter()
    return (
        <Flex align="center">
            <ArrowBackIcon
                color="#ffffff"
                cursor="pointer"
                mr={3}
                onClick={() => router.push('/user/tobey')}
            />
            <Heading as='h4' size='md' color="#ffffff">
                Settings
            </Heading>
        </Flex>

    )
}