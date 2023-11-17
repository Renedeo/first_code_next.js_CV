import { Metadata } from 'next'
import Link from 'next/link'
import { Divider, Avatar, Text, AvatarBadge, AvatarGroup, Box, Stack, AbsoluteCenter } from '@chakra-ui/react'
import { Suspense } from 'react'
import Loading_header from './loading'




function CV() {
    return (
        <>

            <Link href="/">Link to the hompage</Link>
            <br />
            <Suspense fallback={<Loading_header />}>
                <Stack direction='row'>
                    
                    <Stack
                        direction='column'
                        spacing={0}
                    >

                        <Text fontSize='2xl'>
                            René OKE CODJO
                        </Text>
                        <Text fontSize='lg'>
                            Recherche un stage
                        </Text>
                        <Text fontSize='md'>
                            Début janv. 2024
                        </Text>
                    </Stack>
                </Stack>

            </Suspense>
            <Box position='relative' padding='10'>
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                    Formation
                </AbsoluteCenter>
            </Box>
            <Stack direction='row' h='100px' p={4}>

                <Text>Chakra UI</Text>
                <Divider orientation='vertical' />
                <Box
                    p='40px'
                    color='white'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                >
                    Fade
                </Box>
            </Stack>
            <Stack direction='row' h='100px' p={4}>

                <Text>Chakra UI</Text>
                <Divider orientation='vertical' />
                <Box
                    p='40px'
                    color='white'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                >
                    Fade
                </Box>
            </Stack>
            <Box position='relative' padding='10'>
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                    Formations
                </AbsoluteCenter>
            </Box>
            <Box position='relative' padding='10'>
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                    Expériences
                </AbsoluteCenter>
            </Box>
            <Box position='relative' padding='10'>
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                    Compétences techniques
                </AbsoluteCenter>
            </Box>

        </>

    )

}

export default CV