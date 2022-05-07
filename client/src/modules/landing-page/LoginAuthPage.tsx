import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { AuthBottomBar } from '../../ui/authentication/AuthBottomBar'
import { LoginSection } from '../../ui/authentication/login/LoginSection'

export type LoginAuthPageProps = {}

export const LoginAuthPage: React.FC<LoginAuthPageProps> = ({ }) => {
    return (
        <Box width="100vw" border="1px solid white">
            {/* <Link href="/dashboard">Dashboard</Link> */}
            <LoginSection />
            <AuthBottomBar />
        </Box>
    )
}