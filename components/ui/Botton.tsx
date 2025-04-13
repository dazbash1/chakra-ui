import { Box, HStack, VStack } from "@chakra-ui/react";

export default function Botton() {
    return (
        <HStack justifyContent='center' h='full' p={4} gap={2} bg='gray.100'>
            <HStack alignItems='center' gap={1}>
                <Box h={10} w={10} bg='gray.300'>
                </Box>
                <Box h={6} w={24} bg='gray.300'>
                </Box>
            </HStack>
            <VStack alignItems='center' gap={1}>
                <Box h={6} w={28} bg='gray.300'>
                </Box>
                <Box h={6} w={28} bg='gray.300'>
                </Box>
            </VStack>
            <VStack alignItems='center' gap={1}>
                <Box h={6} w={16} bg='gray.300'>
                </Box>
                <Box h={6} w={16} bg='gray.300'>
                </Box>
            </VStack>
        </HStack>
    )
}