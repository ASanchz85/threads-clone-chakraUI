import { Avatar, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from '../components/Actions'
import { useState } from 'react'
import Comment from '../components/Comment'

function PostPage () {
  const [liked, setLiked] = useState(false)

  return (
    <>
      <Flex>
        <Flex
          w='full'
          alignItems='center'
          gap={3}
        >
          <Avatar
            src='/avatar.png'
            size='md'
            name='Mark Zuckerberg'
          />
          <Flex>
            <Text
              fontSize='sm'
              fontWeight='bold'
            >
              markzuckerberg
            </Text>
            <Image
              src='/verified.png'
              w={4}
              h={4}
              ml={1}
            />
          </Flex>
        </Flex>
        <Flex
          gap={4}
          alignItems='center'
        >
          <Text
            fontSize='sm'
            color='gray.light'
          >
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text my={3}>Let's talk about</Text>
      <Box
        borderRadius={6}
        overflow='hidden'
        border='1px solid'
        borderColor='gray.light'
      >
        <Image
          src='/post1.png'
          w='full'
        />
      </Box>
      <Flex
        gap={3}
        my={3}
      >
        <Actions
          liked={liked}
          setLiked={setLiked}
        />
      </Flex>
      <Flex
        gap={2}
        alignItems='center'
      >
        <Text
          color='gray.light'
          fontSize='sm'
        >
          238 replies
        </Text>
        <Box
          w={0.5}
          h={0.5}
          borderRadius='full'
          bg='gray.light'
        />
        <Text
          color='gray.light'
          fontSize='sm'
        >
          {123 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent='space-between'>
        <Flex gap={2} alignItems='center'>
          <Text fontSize='2xl'>👋</Text>
          <Text color='gray.light'>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>
          Get
        </Button>
      </Flex>
      <Divider my={4} />
      <Comment text='Looks really good!' createdAt='3d' likes={189} userName='johndoe' userAvatar='https://bit.ly/dan-abramov' />
      <Comment text='Looks cool mate!' createdAt='2d' likes={221} userName='sagedoe' userAvatar='https://bit.ly/sage-adebayo' />
      <Comment text='Awesome!' createdAt='2d' likes={42} userName='babadoe' userAvatar='https://bit.ly/prosper-baba' />
      <Comment text='How did you do that? wow!' createdAt='1d' likes={7} userName='janejane' />
    </>
  )
}

export default PostPage
