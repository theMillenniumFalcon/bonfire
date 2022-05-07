import { Box } from "@chakra-ui/react";
import React from "react";
import { StandardLink } from "../StandardLink";
import { StandardUserText } from "../StandardUserText";

export interface RightSectionUserDetailsProps { }

export const RightSectionUserDetails: React.FC<RightSectionUserDetailsProps> = ({ }) => {
    return (
        <Box>
            <StandardUserText backgroundColor="#151A21" fontSize="md" color="#ffffff" fontWeight="bold" cursor="pointer" marginBottom="0px">
                Tobey
            </StandardUserText>
            <StandardLink fontSize="xs" color="#5D7290" backgroundColor="#151A21" marginTop="0px">
                #OGspider
            </StandardLink>
        </Box>
    )
}