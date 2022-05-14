import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from "@chakra-ui/react";

export interface LinkedInProps { }

export const LinkedIn: React.FC<LinkedInProps> = ({ }) => {
    return (
        <Box
            backgroundColor="#FD4D4D"
            mr={5}
            color="#ffffff"
            cursor="pointer"
        >
            <LinkedInIcon style={{ backgroundColor: "#FD4D4D" }} />
        </Box>
    )
}