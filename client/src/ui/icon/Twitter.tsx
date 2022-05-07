import React from "react";
import { Img } from "@chakra-ui/react";

export interface TwitterProps { }

export const Twitter: React.FC<TwitterProps> = ({ }) => {
    return (
        <Img
            cursor='pointer'
            htmlWidth='25px'
            htmlHeight='25px'
            objectFit='cover'
            src='twitter.png'
            alt='twitter'
        />
    )
}