import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from "@chakra-ui/react";

export interface LinkedInProps { }

export const LinkedIn: React.FC<LinkedInProps> = ({ }) => {
    return (
        <Box
            backgroundColor="#0B0E11"
            mr={5}
            color="#ffffff"
            cursor="pointer"
        >
            <LinkedInIcon style={{ backgroundColor: "#0B0E11" }} />
        </Box>
    )
}