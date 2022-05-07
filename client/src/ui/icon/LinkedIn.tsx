import React from "react";
import { Img } from "@chakra-ui/react";

export interface LinkedInProps { }

export const LinkedIn: React.FC<LinkedInProps> = ({ }) => {
    return (
        <Img
            cursor='pointer'
            htmlWidth='25px'
            htmlHeight='25px'
            objectFit='cover'
            src='linkedin.png'
            alt='twitter'
            mr={5}
        />
    )
}