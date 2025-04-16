import { Field, Input, Box, HStack, VStack, Button, Stack, Bleed } from "@chakra-ui/react";

export default function Signing() {
    return (
        <VStack bg='gray.100'>
            <VStack h={64} w={48} bg='blue.100'>
                <Stack gap="4" pt={4}>
                    <Field.Root required>
                        <Field.Label>
                            نام و نام خانوادگی <Field.RequiredIndicator />
                        </Field.Label>
                        <Input placeholder=" نام و نام خانوادگی خود را وارد کنید" size='xs' variant="outline" />
                        <Field.Label>
                            شماره تماس<Field.RequiredIndicator />
                        </Field.Label>
                        <Input placeholder=" شماره تماس خود را وارد کنید" variant="outline" size='xs' />
                    </Field.Root>
                    <Button size="xs">ثبت نام</Button>
                </Stack>
            </VStack>
        </VStack>
    )
}