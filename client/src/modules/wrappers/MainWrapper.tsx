import React from "react";
import { Flex } from "@chakra-ui/react";

export type MainWrapperVariant = "small" | "regular"

interface WrapperProps {
    children: any;
    variant?: MainWrapperVariant;
}

export const MainWrapper: React.FC<WrapperProps> = ({
    children,
    variant = "regular",
}) => {
    return (
        <Flex
            mt={6}
            mx="auto"
            maxW={variant === "regular" ? "1200px" : "400px"}
            w="100%"
            maxH="100vh"
            h="100vh"
        >
            {children}
        </Flex>
    )
}