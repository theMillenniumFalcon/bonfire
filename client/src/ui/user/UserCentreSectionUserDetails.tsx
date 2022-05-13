import { Box } from "@chakra-ui/react";
import React from "react";
import { StandardLink } from "../StandardLink";
import { StandardUserText } from "../StandardUserText";

export interface UserCentreSectionUserDetailsProps { }

export const UserCentreSectionUserDetails: React.FC<UserCentreSectionUserDetailsProps> = ({ }) => {
    return (
        <Box marginRight="30%">
            <StandardUserText backgroundColor="#151A21" fontSize="xl" color="#ffffff" fontWeight="bold" cursor="default" marginBottom="0px">
                Tobey
            </StandardUserText>
            <StandardLink
                href="/"
                color='#5D7290'
                fontSize='sm'
                backgroundColor="#151A21"
                content='@OGspider'
            />
        </Box>
    )
}