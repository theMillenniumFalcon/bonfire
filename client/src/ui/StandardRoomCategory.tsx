import { Flex } from "@chakra-ui/react";
import React from "react";

interface StandardRoomCategoryProps {
    children: any
}

export const StandardRoomCategory: React.FC<StandardRoomCategoryProps> = ({ children }) => {
    return (
        <Flex
            align="center"
            justify="center"
            backgroundColor="#242C37"
            color="#ffffff"
            w="85px" 
            h="25px"
            fontWeight="600"
            borderRadius="7px"
            p={1}>
            {children}
        </Flex>
    )
}