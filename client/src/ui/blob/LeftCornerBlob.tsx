import { Image } from "@chakra-ui/react";
import React from "react";

interface LeftCornerBlobProps { }

export const LeftCornerBlob: React.FC<LeftCornerBlobProps> = ({ }) => {
    return (
        <Image
            borderRadius='2px'
            height="100%"
            width="60%"
            src='blob.svg'
            alt=''
            pos="fixed"
        />
    )
}