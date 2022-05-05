import { Box } from "@chakra-ui/react";
import React from "react";
import { LeftSectionContentHeading } from "../headings/LeftSectionContentHeading";
import { OnlineNumText } from "../OnlineNumText";
import { LeftSectionUser } from "../LeftSectionUser";

export interface LeftSectionContentProps { }

export const LeftSectionContent: React.FC<LeftSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12}>
            <LeftSectionContentHeading />
            <OnlineNumText />
            <LeftSectionUser />
        </Box>
    )
}