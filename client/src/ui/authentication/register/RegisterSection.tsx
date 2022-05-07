import { Flex } from "@chakra-ui/react";
import React from "react";
import { RegisterCard } from "./RegisterCard";

export interface RegisterSectionProps { }

export const RegisterSection: React.FC<RegisterSectionProps> = ({ }) => {
    return (
        <Flex align="center" justify="center" height="100%">
            <RegisterCard />
        </Flex>
    )
}