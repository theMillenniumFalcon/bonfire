import React from "react";
import MicIcon from '@mui/icons-material/Mic';
import { Flex } from "@chakra-ui/react";

export interface MicrophoneProps { }

export const Microphone: React.FC<MicrophoneProps> = ({ }) => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            height="35px"
            width="100px"
            borderRadius='2px'
            backgroundColor="#FD4D4D"
            mr={3}
            color="#ffffff"
            cursor="pointer"
        >
            <MicIcon style={{ backgroundColor: "#FD4D4D" }} />
        </Flex>
    )
}