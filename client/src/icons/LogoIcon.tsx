import { Img } from "@chakra-ui/react";
import React from "react";

export interface LogoIconProps { }

export const LogoIcon: React.FC<LogoIconProps> = ({ }) => {
    return (
        <Img
            cursor='pointer'
            htmlWidth='60px'
            htmlHeight='60px'
            objectFit='cover'
            borderRadius="50%"
            src='logo.png'
            alt='hideout'
            mr={2}
        />
    )
}