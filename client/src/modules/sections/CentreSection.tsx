import { Box } from "@chakra-ui/react";
import React from "react";
import { CentreHeader } from "../../ui/header/CentreHeader";

export interface CentreSectionProps { }

export const CentreSection: React.FC<CentreSectionProps> = ({ }) => {
    return (
        <Box w="50%" paddingLeft={2} paddingRight={2}>
            <CentreHeader />
        </Box>
    )
}