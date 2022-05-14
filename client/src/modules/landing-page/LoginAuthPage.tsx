import { Box } from '@chakra-ui/react'
import React from 'react'
import { AuthBottomBar } from '../../ui/authentication/AuthBottomBar'
import { LoginSection } from '../../ui/authentication/login/LoginSection'
import { LeftCornerBlob } from '../../ui/blob/LeftCornerBlob'
import { RightCornerBlob } from '../../ui/blob/RightCornerBlob'

export type LoginAuthPageProps = {}

export const LoginAuthPage: React.FC<LoginAuthPageProps> = ({ }) => {
    return (
        <Box width="100vw" height="94.3vh">
            <LeftCornerBlob />
            <RightCornerBlob />
            <LoginSection />
            <AuthBottomBar />
        </Box>
    )
}