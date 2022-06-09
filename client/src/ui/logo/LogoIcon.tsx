import { Img } from "@chakra-ui/react";
import React from "react";

export interface LogoIconProps { }

export const LogoIcon: React.FC<LogoIconProps> = ({ }) => {
    return (
        <Img
            cursor='default'
            htmlWidth='40px'
            htmlHeight='40px'
            objectFit='cover'
            borderRadius="50%"
            src='logo.png'
            alt='hideout'
            mr={2}
        />
    )
}