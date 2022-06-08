import { Box, Flex } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { InputField } from '../../modules/input-field/InputField'
import { StandardButton } from '../StandardButton'

interface CreateNewRoomFormProps { }

export const CreateNewRoomForm: React.FC<CreateNewRoomFormProps> = ({ }) => {
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
                <Box color="#ffffff" width="100%">
                    <Form>
                        <Box pt={4} backgroundColor="#151A21">
                            <InputField name="name" placeholder="name" label="Name of the Room" />
                        </Box>
                        <Box pt={4} backgroundColor="#151A21">
                            <InputField name="password" placeholder="password" label="Password" type="password" />
                        </Box>
                        <Flex pt={5} align="center" justify="space-between" color="#0B0E11" backgroundColor="#151A21">
                            <StandardButton color='#ffffff' height="38px" width="120px" content="Create Room" isLoading={isSubmitting} />
                        </Flex>
                    </Form>
                </Box>
            )}
        </Formik>
    )
}