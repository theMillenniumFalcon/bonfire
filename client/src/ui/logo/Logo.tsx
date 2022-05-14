import { Flex } from "@chakra-ui/react";
import React from "react";
import { LogoIcon } from "./LogoIcon";
import { LogoText } from "./LogoText";

export interface LogoProps { }

export const Logo: React.FC<LogoProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" width="80px" zIndex="1">
            <LogoIcon />
            <LogoText />
        </Flex>
    )
}