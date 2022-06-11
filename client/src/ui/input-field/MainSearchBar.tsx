import { Text, Flex } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import React from "react";

export interface MainSearchBarProps { }

export const MainSearchBar: React.FC<MainSearchBarProps> = ({ }) => {
    return (
        <Flex width="100%" backgroundColor="#151A21" p={2} borderRadius="5px" border="1px solid #808998" cursor="pointer" alignItems="center">
            <SearchIcon color="#ffffff" backgroundColor="#151A21" marginLeft={2} />
            <Text userSelect="none" fontSize='md' color="#808998" backgroundColor="#151A21" marginLeft={4}>
                Search for rooms, users or categories
            </Text>
        </Flex>
    )
}
