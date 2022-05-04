import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const LoginPage: React.FC = () => {
    return (
        <Box color="#ffffff">
            Login Page
            <br/>
            <Link href="/dashboard">Dashboard</Link>
        </Box>
    )
}

export default LoginPage