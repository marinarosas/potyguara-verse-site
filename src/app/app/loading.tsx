'use client'


import {
  Box,
  Flex,
  Skeleton,
  VStack,
  HStack,
  SkeletonText,
  Image,
} from '@chakra-ui/react'

export default function Loading() {
  return (
    <Flex direction="column" h="100vh">
      <Flex w="100%" flex="1" mx="auto" bg="gray.650">
        <VStack p="2" w="48" spacing="8">
          <SkeletonText
            startColor="gray.100"
            endColor="gray.200"
            h="4"
            w="40"
            mt="4"
            noOfLines={8}
            spacing="4"
          />
        </VStack>

        <Box flex="1" borderRadius="md" p="4" bg="#FFFF" boxShadow="inner">
          <HStack mb="8" align="center" spacing="4">
            <SkeletonText
              startColor="gray.400"
              endColor="gray.500"
              h="4"
              w="40"
              noOfLines={1}
              spacing="4"
            />
            <SkeletonText
              startColor="gray.400"
              endColor="gray.500"
              h="4"
              w="40"
              noOfLines={1}
              spacing="4"
            />
            <SkeletonText
              startColor="gray.400"
              endColor="gray.500"
              h="4"
              w="40"
              noOfLines={1}
              spacing="4"
            />
          </HStack>

          <SkeletonText
            startColor="gray.700"
            endColor="gray.800"
            h="4"
            w="full"
            noOfLines={4}
            spacing="4"
          />
        </Box>
      </Flex>
    </Flex>
  )
}
