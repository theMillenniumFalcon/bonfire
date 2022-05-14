import { Image } from "@chakra-ui/react";
import React from "react";

interface RightCornerBlobProps { }

export const RightCornerBlob: React.FC<RightCornerBlobProps> = ({ }) => {
    return (
        <Image
            borderRadius='2px'
            height="100%"
            width="40%"
            right="0"
            src='blob2.svg'
            alt=''
            pos="fixed"
        />
    )
}