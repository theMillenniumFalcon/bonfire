import { Button } from '@chakra-ui/react'
import React from "react";

export interface StandardButtonProps {
    height: string;
    width: string;
    content: any;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    isLoading?: any;
}

export const StandardButton: React.FC<StandardButtonProps> = ({
    height,
    width,
    content,
    onClick,
    isLoading
}) => {

    return (
        <Button
            size='sm'
            height={height}
            width={width}
            isLoading={isLoading}
            border='0px'
            backgroundColor="#FD4D4D"
            _hover={{ bg: '#fc6161' }}
            onClick={onClick}
        >
            {content}
        </Button>
    )
}
