import { Field, Input, Box, HStack, VStack, Button } from "@chakra-ui/react";

export default function Login() {
    return (
        <VStack justifyContent='center' h='full' w='full' p={4} gap={2} bg='red.100'>
            <Field.Root required>
                <Field.Label>
                    شماره تلفن <Field.RequiredIndicator />
                </Field.Label>
                <Input placeholder=".........09" />
                <Field.HelperText>اطلاعات تماس شما محفوظ می باشد.</Field.HelperText>
                <Field.ErrorText>شماره خود را صحیح وارد کنید</Field.ErrorText>
            </Field.Root>
            <Button colorPalette='red'>
                ارسال کد
            </Button>

        </VStack>
    )
}