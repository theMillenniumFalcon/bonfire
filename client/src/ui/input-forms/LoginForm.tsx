import { Box, Flex } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { useLoginMutation } from '../../generated/graphql'
import { InputField } from '../../modules/input-field/InputField'
import Errors from '../../utils/Errors'
import { StandardButton } from '../StandardButton'
import { StandardLink } from '../StandardLink'

interface LoginFormProps { }

export const LoginForm: React.FC<LoginFormProps> = ({ }) => {
    const router = useRouter()
    const [, login] = useLoginMutation()

    return (
        <Formik initialValues={{ username: "", password: "" }} onSubmit={async (values, { setErrors }) => {
            // const response = await login(values)
            // if (response.data?.login.errors) {
            //     setErrors(Errors(response.data.login.errors))
            // } else if (response.data?.login.user) {
            //     // * worked
            //     router.push('/dashboard')
            // }
            // console.log(values)
            // return login(values)
            console.log(values)
        }}>
            {({ isSubmitting }) => (
                <Box color="#ffffff" width="100%">
                    <Form>
                        <Box pt={4} backgroundColor="#151A21">
                            <InputField name="username" placeholder="username" label="Username" />
                        </Box>
                        <Box pt={4} backgroundColor="#151A21">
                            <InputField name="password" placeholder="password" label="Password" type="password" />
                        </Box>
                        <Flex pt={5} align="center" justify="space-between" color="#0B0E11" backgroundColor="#151A21">
                            <StandardButton height="38px" width="120px" content="Login" isLoading={isSubmitting} />
                            <StandardLink backgroundColor="#151A21" href="/" color='red' fontSize='15px' content='Create a new account' />
                        </Flex>
                    </Form>
                </Box>
            )}
        </Formik>
    )
}