import { Box, Flex } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { InputField } from '../../modules/input-field/InputField'
import { StandardButton } from '../StandardButton'

interface ReviewPageFormProps { }

export const ReviewPageForm: React.FC<ReviewPageFormProps> = ({ }) => {
    const router = useRouter()
    //   const [, register] = useRegisterMutation()

    return (
        <Formik initialValues={{ username: "", review: "" }} onSubmit={async (values, { setErrors }) => {
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
                <Box backgroundColor="red" width="40vw" color="#ffffff">
                    <Form>
                        <Box mt={4}>
                            <InputField name="username" placeholder="username" label="Username" />
                        </Box>
                        <Box mt={4}>
                            <InputField textarea name="review" placeholder="review" label="Review" />
                        </Box>
                        <Box mt={5} color="#0B0E11">
                            <StandardButton height="38px" width="120px" content="Send Review" isLoading={isSubmitting} />
                        </Box>
                    </Form>
                </Box>
            )}
        </Formik>
    )
}