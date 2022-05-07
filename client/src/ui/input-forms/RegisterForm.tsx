import { Box, Flex } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { InputField } from '../../modules/input-field/InputField'
import { StandardButton } from '../StandardButton'
import { StandardLink } from '../StandardLink'

interface RegisterFormProps { }

export const RegisterForm: React.FC<RegisterFormProps> = ({ }) => {
    const router = useRouter()
    //   const [, register] = useRegisterMutation()

    return (
        <Formik initialValues={{ username: "", email: "", password: "" }} onSubmit={async (values, { setErrors }) => {
            //   const response = await register(values)
            //   if (response.data?.register.errors) {
            //     setErrors(Errors(response.data.register.errors))
            //   } else if (response.data?.register.user) {
            //     // * worked
            //     router.push('/')
            //   }
            //   console.log(values)
            //   return register(values)
        }}>
            {({ isSubmitting }) => (
               <Box backgroundColor="#151A21">
                    <Form>
                    <Box mt={4} backgroundColor="#151A21">
                        <InputField name="username" placeholder="username" label="Username" />
                    </Box>
                    <Box mt={4}>
                        <InputField name="email" placeholder="email" label="Email" />
                    </Box>
                    <Box mt={4}>
                        <InputField name="password" placeholder="password" label="Password" type="password" />
                    </Box>
                    <Flex mt={5} align="center" justify="space-between">
                        <StandardButton height="38px" width="120px" content="Register" isLoading={isSubmitting} />
                        <StandardLink href="/login" color='red' fontSize='15px' content='Already have an account?' />
                    </Flex>
                </Form>
               </Box>
            )}
        </Formik>
    )
}