import { Box } from "@chakra-ui/react";
import React from "react";
import { StandardLink } from "../StandardLink";
import { StandardUserText } from "../StandardUserText";

export interface LeftSectionUserDetailsProps { }

export const LeftSectionUserDetails: React.FC<LeftSectionUserDetailsProps> = ({ }) => {
    return (
        <Box>
            <StandardUserText fontSize="sm" color="#ffffff" fontWeight="bold" cursor="pointer">
                Tobey
            </StandardUserText>
            <StandardLink href="/" color='#5D7290' fontSize='sm' content='Random paragraph' />
        </Box>
    )
}