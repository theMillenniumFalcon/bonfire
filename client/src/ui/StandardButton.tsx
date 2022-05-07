import { Button } from '@chakra-ui/react'
import React from "react";

export interface StandardButtonProps {
    height: string;
    width: string;
    content: string
}

export const StandardButton: React.FC<StandardButtonProps> = ({ height, width, content }) => {
    return (
        <Button
            size='sm'
            height={height}
            width={width}
            border='0px'
            backgroundColor="#FD4D4D"
            _hover={{ bg: '#fc6161' }}
        >
            {content}
        </Button>
    )
}
