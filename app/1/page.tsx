import { Box, Button, HStack, VStack } from "@chakra-ui/react";

export default function page() {
    return (
        <VStack w='full' h='full' bg='gray.100' justifyContent='center' alignItems='center'>
            <VStack w='full' h='80' bg='red-500' gap={10}>
                <HStack w='full' h='65' bg='gray.400' alignItems='end'>
                    <Box h={14} w={10} bg='red.300'>
                    </Box>
                    <Box h={14} w={10} bg='red.300'>
                    </Box>
                </HStack>
            </VStack>
        </VStack>
    )
}