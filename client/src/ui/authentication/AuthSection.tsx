import { Flex } from "@chakra-ui/react";
import React from "react";
import { RegisterCard } from "./register/RegisterCard";

export interface AuthSectionProps { }

export const AuthSection: React.FC<AuthSectionProps> = ({ }) => {
    return (
        <Flex align="center" justify="center" height="100%">
            <RegisterCard />
        </Flex>
    )
}