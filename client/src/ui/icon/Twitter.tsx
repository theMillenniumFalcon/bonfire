import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from "@chakra-ui/react";

export interface TwitterProps { }

export const Twitter: React.FC<TwitterProps> = ({ }) => {
    return (
        <Box
            backgroundColor="#FD4D4D"
            mr={5}
            color="#ffffff"
            cursor="pointer"
        >
            <TwitterIcon style={{ backgroundColor: "#FD4D4D" }} />
        </Box>
    )
}