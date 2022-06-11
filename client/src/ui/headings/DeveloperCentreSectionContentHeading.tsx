import { Heading, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { StandardButton } from "../StandardButton";

export interface DeveloperCentreSectionContentHeadingProps { }

export const DeveloperCentreSectionContentHeading: React.FC<DeveloperCentreSectionContentHeadingProps> = ({ }) => {
    const router = useRouter()
    return (
        <Flex align="center" justify="space-between" width="100%" height="40px" color="#ffffff">
            <Heading as='h4' size='md' marginLeft={6}>
                Your Bots
            </Heading>
            <StandardButton
                height="38px"
                width="120px"
                content="New Bot"
                onClick={() => router.push('/create-new-bot')}
            />
        </Flex>
    )
}