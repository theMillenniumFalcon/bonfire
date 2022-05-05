import { Box } from "@chakra-ui/react";
import React from "react";
import { RightSectionUser } from "./RightSectionUser";

export interface RightSectionUserCardProps { }

export const RightSectionUserCard: React.FC<RightSectionUserCardProps> = ({ }) => {
    return (
        <Box p={5} backgroundColor="#151A21" borderRadius="4px">
            <RightSectionUser />
        </Box>
    )
}