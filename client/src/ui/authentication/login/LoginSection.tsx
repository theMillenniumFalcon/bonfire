import { Flex } from "@chakra-ui/react";
import React from "react";
import { LoginCard } from "./LoginCard";

export interface LoginSectionProps { }

export const LoginSection: React.FC<LoginSectionProps> = ({ }) => {
    return (
        <Flex align="center" justify="center" height="100%">
            <LoginCard />
        </Flex>
    )
}