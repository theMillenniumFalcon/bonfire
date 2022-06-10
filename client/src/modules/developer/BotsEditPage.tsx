import { Box } from "@chakra-ui/react";
import React from "react";
import { LeftCornerBlob } from "../../ui/blob/LeftCornerBlob";
import { RightCornerBlob } from "../../ui/blob/RightCornerBlob";
import { BotsEditSection } from "../../ui/bots/BotsEditSection";

export interface BotsEditPageProps { }

export const BotsEditPage: React.FC<BotsEditPageProps> = ({ }) => {
    return (
        <Box width="100vw" height="94.3vh">
            <LeftCornerBlob />
            <RightCornerBlob />
            <BotsEditSection />
        </Box>
    )
}