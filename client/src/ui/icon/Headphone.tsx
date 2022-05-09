import React from "react";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Flex } from "@chakra-ui/react";

export interface HeadphoneProps { }

export const Headphone: React.FC<HeadphoneProps> = ({ }) => {
    return (
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
        >
            <HeadphonesIcon style={{ backgroundColor: "#0B0E11" }} />
        </Flex>
    )
}