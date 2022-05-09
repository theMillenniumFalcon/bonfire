import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from "@chakra-ui/react";

export interface TwitterProps { }

export const Twitter: React.FC<TwitterProps> = ({ }) => {
    return (
        <Box
            backgroundColor="#0B0E11"
            color="#ffffff"
            cursor="pointer"
        >
            <TwitterIcon style={{ backgroundColor: "#0B0E11" }} />
        </Box>
    )
}