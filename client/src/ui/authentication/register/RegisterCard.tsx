import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { RegisterForm } from "../../input-forms/RegisterForm";
import { StandardAuthText } from "../../StandardAuthText";

export interface RegisterCardProps { }

export const RegisterCard: React.FC<RegisterCardProps> = ({ }) => {
    return (
        <Box paddingTop={10} paddingLeft={6} paddingRight={6} backgroundColor="#151A21" borderRadius="4px" height="65vh" width="30vw" zIndex="1">
            <StandardAuthText backgroundColor="#151A21" fontSize="20px" fontWeight="600">
                Welcome!
            </StandardAuthText>
            <Flex align="center" justify="center" backgroundColor="#151A21" height="80%">
                <RegisterForm />
            </Flex>
        </Box>
    )
}