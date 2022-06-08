import { Flex } from "@chakra-ui/react";
import React from "react";
import { Notification } from "./icon/Notification";
import { Setting } from "./icon/Setting";

export interface IconGroupProps { }

export const IconGroup: React.FC<IconGroupProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" width="110px" height="40px">
            <Notification />
            <Setting />
        </Flex>
    )
}