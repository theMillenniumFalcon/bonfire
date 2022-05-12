import { Flex } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../logo/Logo";
import { AuthBottomBarIconGrp } from "./AuthBottomBarIconGrp";

export interface AuthBottomBarProps { }

export const AuthBottomBar: React.FC<AuthBottomBarProps> = ({ }) => {
    return (
        <Flex width="100%" bottom="0" align="center" justify="space-between" border="1px solid white" paddingLeft={4} paddingRight={10}>
            <Logo />
            <AuthBottomBarIconGrp />
        </Flex>
    )
}