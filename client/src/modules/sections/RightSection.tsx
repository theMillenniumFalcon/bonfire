import { Box } from "@chakra-ui/react";
import React from "react";
import { RightHeader } from "../../ui/header/RightHeader";

export interface RightSectionProps { }

export const RightSection: React.FC<RightSectionProps> = ({ }) => {
    return (
        <Box w="20%" paddingLeft={2} paddingRight={2}>
            <RightHeader />
        </Box>
    )
}