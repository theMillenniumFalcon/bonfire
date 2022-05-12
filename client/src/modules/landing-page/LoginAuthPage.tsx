import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { AuthBottomBar } from '../../ui/authentication/AuthBottomBar'
import { LoginSection } from '../../ui/authentication/login/LoginSection'

export type LoginAuthPageProps = {}

export const LoginAuthPage: React.FC<LoginAuthPageProps> = ({ }) => {
    return (
        <Flex direction="column" align="center" justify="center" width="100vw" border="1px solid white" height="100%">
            {/* <Link href="/dashboard">Dashboard</Link> */}
            <LoginSection />
            <AuthBottomBar />
        </Flex>
    )
}