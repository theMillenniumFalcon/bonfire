import { Flex } from "@chakra-ui/react";
import React from "react";
import { LinkedIn } from "../icon/LinkedIn";
import { Twitter } from "../icon/Twitter";

export interface AuthBottomBarIconGrpProps { }

export const AuthBottomBarIconGrp: React.FC<AuthBottomBarIconGrpProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" width="50px">
            <LinkedIn />
            <Twitter />
        </Flex>
    )
}