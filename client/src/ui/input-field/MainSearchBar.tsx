import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import React from "react";

export interface MainSearchBarProps { }

export const MainSearchBar: React.FC<MainSearchBarProps> = ({ }) => {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
            />
            <Input type='tel' placeholder='Search for rooms, users or categories' variant='outline' />
        </InputGroup>
    )
}
