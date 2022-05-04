import { Box } from "@chakra-ui/react";
import React from "react";
import { LeftHeader } from "../../ui/header/LeftHeader";

export interface LeftSectionProps { }

export const LeftSection: React.FC<LeftSectionProps> = ({ }) => {
    return (
        <Box w="20%" paddingLeft={2} paddingRight={2}>
            <LeftHeader />
        </Box>
    )
}