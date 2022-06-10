import { Box } from "@chakra-ui/react";
import React from "react";
import { RightHeader } from "../../ui/header/RightHeader";
import { RightSectionContent } from "../../ui/section-content/RightSectionContent";

export interface RightSectionProps { }

export const RightSection: React.FC<RightSectionProps> = ({ }) => {
    return (
        <Box w="25%" paddingLeft={2} paddingRight={2}>
            <RightHeader />
            <RightSectionContent />
        </Box>
    )
}