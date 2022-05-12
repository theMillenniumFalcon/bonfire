import { Box } from "@chakra-ui/react";
import React from "react";
import { ExploreCentreSectionContentHeading } from "../headings/ExploreCentreSectionContentHeading";
import { ExploreSection } from "../room/ExploreSection";

export interface ExploreCentreSectionContentProps { }

export const ExploreCentreSectionContent: React.FC<ExploreCentreSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12}>
            <ExploreCentreSectionContentHeading />
            <ExploreSection />
        </Box>
    )
}