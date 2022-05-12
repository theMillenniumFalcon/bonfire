import { Box } from "@chakra-ui/react";
import React from "react";
import { StandardLink } from "../StandardLink";
import { StandardUserText } from "../StandardUserText";

export interface RightSectionUserBioProps { }

export const RightSectionUserBio: React.FC<RightSectionUserBioProps> = ({ }) => {
    return (
        <Box>
            <StandardUserText
                backgroundColor="#151A21"
                fontSize="md"
                color="#5D7290"
                fontWeight="450"
            >
                My bio...
            </StandardUserText>
            <StandardLink
                href="/"
                color='#5D7290'
                fontSize='xs'
                backgroundColor="#151A21"
                content='https://mysite.dev'
            />
        </Box>
    )
}