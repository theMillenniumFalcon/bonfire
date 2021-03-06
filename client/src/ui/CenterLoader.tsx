import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

interface CenterLoaderProps { }

export const CenterLoader: React.FC<CenterLoaderProps> = ({ }) => {
    return (
        <Flex align="center" justify="center" w="100%" h="100%">
            <Spinner />
        </Flex>
    )
}