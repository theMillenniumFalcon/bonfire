import { Box } from "@chakra-ui/react";
import React from "react";
import { LoginForm } from "../../input-forms/LoginForm";
import { StandardAuthText } from "../../StandardAuthText";

export interface LoginCardProps { }

export const LoginCard: React.FC<LoginCardProps> = ({ }) => {
    return (
        <Box paddingTop={10} paddingLeft={6} paddingRight={6} backgroundColor="#151A21" borderRadius="4px" height="65vh" width="30vw">
            <StandardAuthText backgroundColor="#151A21" fontSize="20px" fontWeight="600">
                Welcome back!
            </StandardAuthText>
            <Box backgroundColor="#151A21">
                <LoginForm />
            </Box>
        </Box>
    )
}