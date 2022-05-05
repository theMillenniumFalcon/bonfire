import { Box } from "@chakra-ui/react";
import React from "react";
import { StandardLink } from "./StandardLink";
import { StandardUserText } from "./StandardUserText";

export interface LeftSectionUserDetailsProps { }

export const LeftSectionUserDetails: React.FC<LeftSectionUserDetailsProps> = ({ }) => {
    return (
        <Box>
            <StandardUserText color="#ffffff" fontWeight="bold" cursor="pointer">
                Tobey
            </StandardUserText>
            <StandardLink color="#5D7290">
                Random paragraph
            </StandardLink>
        </Box>
    )
}