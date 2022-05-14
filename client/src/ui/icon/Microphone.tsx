import React, { useState } from "react";
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { Flex } from "@chakra-ui/react";

export interface MicrophoneProps { }

export const Microphone: React.FC<MicrophoneProps> = ({ }) => {
    const [mute, setMute] = useState(true)
    const toggleMic = () => {
        setMute(prevState => !prevState)
    }

    return (
        <>
            {mute ? (
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    height="35px"
                    width="100px"
                    borderRadius='2px'
                    backgroundColor="#0B0E11"
                    mr={3}
                    color="#ffffff"
                    cursor="pointer"
                    onClick={toggleMic}
                >
                    <MicOffIcon style={{ backgroundColor: "#0B0E11" }} />
                </Flex>
            ) : (
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
                    onClick={toggleMic}
                >
                    <MicIcon style={{ backgroundColor: "#FD4D4D" }} />
                </Flex>
            )}
        </>
    )
}