import { Button } from '@chakra-ui/react'
import React from "react";

export interface StandardButtonProps { }

export const StandardButton: React.FC<StandardButtonProps> = ({ }) => {
    return (
        <Button
            size='sm'
            height='38px'
            width='120px'
            border='0px'
            backgroundColor="#FD4D4D"
            _hover={{ bg: '#fc6161' }}
        >
            New Room
        </Button>
    )
}
