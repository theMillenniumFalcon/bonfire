import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { AuthBottomBar } from '../../ui/authentication/AuthBottomBar'
import { AuthSection } from '../../ui/authentication/AuthSection'

export const AuthPage: React.FC = () => {
    return (
        <Box width="100vw" border="1px solid white">
            {/* <Link href="/dashboard">Dashboard</Link> */}
            <AuthSection />
            <AuthBottomBar />
        </Box>
    )
}