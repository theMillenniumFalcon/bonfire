import { Box } from "@chakra-ui/react";
import React from "react";
import { StandardLink } from "./StandardLink";
import { StandardText } from "./StandardText";

export interface LeftSectionUserDetailsProps { }

export const LeftSectionUserDetails: React.FC<LeftSectionUserDetailsProps> = ({ }) => {
    return (
        <Box>
            <StandardText color="#ffffff" fontWeight="bold" cursor="pointer">
                Tobey
            </StandardText>
            <StandardLink color="#5D7290">
                Random paragraph
            </StandardLink>
        </Box>
    )
}