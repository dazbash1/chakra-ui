import { Field, Input, Box, HStack, VStack, Button } from "@chakra-ui/react";

export default function Login() {
    return (
        <VStack bg='gray.500'>
            <VStack h={64} w={48} p={3} bg='gray.300'>
                <Field.Root required>
                    <Field.Label>
                        شماره تلفن <Field.RequiredIndicator />
                    </Field.Label>
                    <Input placeholder=".........09" />
                    <Field.HelperText>لطفا شاره تماس خود را وارد کنید</Field.HelperText>
                    <Field.ErrorText>شماره خود را صحیح وارد کنید</Field.ErrorText>
                    <Button colorPalette='red'>
                    ارسال کد
                    </Button>
                    <Field.HelperText>فراموشی رمز عبور</Field.HelperText>
                </Field.Root>
            </VStack>
        </VStack>
    )
}