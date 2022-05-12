import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { AuthBottomBar } from '../../ui/authentication/AuthBottomBar'
import { RegisterSection } from '../../ui/authentication/register/RegisterSection'

export type RegisterAuthPageProps = {}

export const RegisterAuthPage: React.FC<RegisterAuthPageProps> = ({ }) => {
    return (
        <Flex direction="column" align="center" justify="center" width="100vw" border="1px solid white" height="100%">
            {/* <Link href="/dashboard">Dashboard</Link> */}
            <RegisterSection />
            <AuthBottomBar />
        </Flex>
    )
}