import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { AuthBottomBar } from '../../ui/authentication/AuthBottomBar'
import { RegisterSection } from '../../ui/authentication/register/RegisterSection'

export type RegisterAuthPageProps = {}

export const RegisterAuthPage: React.FC<RegisterAuthPageProps> = ({ }) => {
    return (
        <Box width="100vw" border="1px solid white">
            {/* <Link href="/dashboard">Dashboard</Link> */}
            <RegisterSection />
            <AuthBottomBar />
        </Box>
    )
}