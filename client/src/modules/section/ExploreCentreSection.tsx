import { Box } from "@chakra-ui/react";
import React from "react";
import { ExploreCentre } from "../../ui/section/ExploreCentre";

export interface ExploreCentreSectionProps { }

export const ExploreCentreSection: React.FC<ExploreCentreSectionProps> = ({ }) => {
    return (
        <Box w="50%" paddingLeft={2} paddingRight={2}>
            <ExploreCentre />
        </Box>
    )
}