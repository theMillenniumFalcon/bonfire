import { Box } from "@chakra-ui/react";
import React from "react";
import { RightHeader } from "../../ui/header/RightHeader";
import { RoomRightSectionContent } from "../../ui/section-content/RoomRightSectionContent";

export interface RoomRightSectionProps { }

export const RoomRightSection: React.FC<RoomRightSectionProps> = ({ }) => {
    return (
        <Box w="25%" paddingLeft={2} paddingRight={2}>
            <RightHeader />
            <RoomRightSectionContent />
        </Box>
    )
}