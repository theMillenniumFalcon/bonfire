import { Box } from '@chakra-ui/react'
import React from 'react'
import { AuthBottomBar } from '../../ui/authentication/AuthBottomBar'
import { RegisterSection } from '../../ui/authentication/register/RegisterSection'
import { LeftCornerBlob } from '../../ui/blob/LeftCornerBlob'
import { RightCornerBlob } from '../../ui/blob/RightCornerBlob'

export type RegisterAuthPageProps = {}

export const RegisterAuthPage: React.FC<RegisterAuthPageProps> = ({ }) => {
    return (
        <Box width="100vw" height="94.3vh" pos="relative">
            <LeftCornerBlob />
            <RightCornerBlob />
            <RegisterSection />
            <AuthBottomBar />
        </Box>
    )
}