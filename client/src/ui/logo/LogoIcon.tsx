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
            src='https://w7.pngwing.com/pngs/574/475/png-transparent-logo-xunit-random-org-randomness-computer-software-logo-github-blue-angle-text.png'
            alt='hideout'
            mr={2}
        />
    )
}