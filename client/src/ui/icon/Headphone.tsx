import React, { useState } from "react";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';
import { Flex } from "@chakra-ui/react";

export interface HeadphoneProps { }

export const Headphone: React.FC<HeadphoneProps> = ({ }) => {
    const [deaf, setDeaf] = useState(true)
    const toggleMic = () => {
        setDeaf(prevState => !prevState)
    }

    return (
        <>
            {deaf ? (
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    height="35px"
                    width="40px"
                    borderRadius='2px'
                    backgroundColor="#FD4D4D"
                    mr={3}
                    color="#ffffff"
                    cursor="pointer"
                    onClick={toggleMic}
                >
                    <HeadphonesIcon style={{ backgroundColor: "#FD4D4D" }} />
                </Flex>
            ) : (
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    height="35px"
                    width="40px"
                    borderRadius='2px'
                    backgroundColor="#0B0E11"
                    mr={3}
                    color="#ffffff"
                    cursor="pointer"
                    onClick={toggleMic}
                >
                    <HeadsetOffIcon style={{ backgroundColor: "#0B0E11" }} />
                </Flex>
            )}
        </>
    )
}