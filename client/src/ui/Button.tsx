import { Box } from '@chakra-ui/react'
import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    size?: string;
    color?: string;
    loading?: boolean;
    icon?: ReactNode;
    transition?: boolean;
}

const Button: React.FC<ButtonProps> = ({}) => {
    return (
        <Box>
            Button
        </Box>
    )
}

export default Button