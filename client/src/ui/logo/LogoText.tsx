import { Heading } from "@chakra-ui/react";
import React from "react";

export interface LogoTextProps { }

export const LogoText: React.FC<LogoTextProps> = ({ }) => {
    return (
        <Heading as='h3' size='lg' color="#FD4D4D" cursor="pointer">
            hideout
        </Heading>
    )
}