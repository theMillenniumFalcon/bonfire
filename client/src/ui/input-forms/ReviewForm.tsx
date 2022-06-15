import { Box, Flex } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { InputField } from '../../modules/input-field/InputField'
import { StandardButton } from '../StandardButton'

interface ReviewFormProps { }

export const ReviewForm: React.FC<ReviewFormProps> = ({ }) => {
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
                <Box color="#ffffff" width="100%">
                <Form>
                    <Box pt={4} backgroundColor="#151A21">
                        <InputField textarea name="review" placeholder="review" label="Review" />
                    </Box>
                    <Flex pt={5} align="center" justify="space-between" color="#0B0E11" backgroundColor="#151A21">
                        <StandardButton height="38px" width="120px" content="Submit review" isLoading={isSubmitting} />
                    </Flex>
                </Form>
            </Box>
            )}
        </Formik>
    )
}