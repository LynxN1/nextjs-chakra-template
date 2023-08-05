import Head from 'next/head'
import { Center, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Center h={'100vh'}>
        <Heading textAlign={'center'}>Next.js + TypeScript + Chakra UI + axios template</Heading>
      </Center>
    </>
  )
}
