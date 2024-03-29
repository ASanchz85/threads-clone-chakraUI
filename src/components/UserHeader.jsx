import {
  Avatar,
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
  useToast
} from '@chakra-ui/react'
import { BsInstagram } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'

function UserHeader () {
  const toast = useToast()

  const handleCopyURL = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({
        title: 'Link copied to clipboard',
        description: 'You can now paste the link to share it with others',
        status: 'success',
        duration: 2000,
        isClosable: true
      })
    })
  }

  return (
    <VStack
      gap={4}
      alignItems='start'
    >
      <Flex
        justifyContent='space-between'
        w='full'
      >
        <Box>
          <Text
            fontSize='2xl'
            fontWeight='bold'
          >
            Mark Zuckerberg
          </Text>
          <Flex
            gap={2}
            alignContent='center'
          >
            <Text fontSize='sm'>markzuckerberg</Text>
            <Text
              fontSize='xs'
              bg='gray.dark'
              color='gray.light'
              p={1}
              borderRadius='full'
            >
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name='Mark Zuckerberg'
            src='/avatar.png'
            size={{ base: 'md', md: 'xl' }}
          />
        </Box>
      </Flex>
      <Text>Co-Founder, executive chairman and CEO of Meta Platform</Text>
      <Flex
        w='full'
        justifyContent='space-between'
      >
        <Flex
          gap={2}
          alignItems='center'
        >
          <Text color='gray.light'>3.2k followers</Text>
          <Box
            w={1}
            h={1}
            bg='gray.light'
            borderRadius='full'
          />
          <Link color='gray.light'>instagram.com</Link>
        </Flex>
        <Flex>
          <Box className='icon-container'>
            <BsInstagram
              size={24}
              cursor='pointer'
            />
          </Box>
          <Box className='icon-container'>
            <Menu>
              <MenuButton>
                <CgMoreO
                  size={24}
                  cursor='pointer'
                />
              </MenuButton>
              <Portal>
                <MenuList bg='gray.dark'>
                  <MenuItem
                    bg='gray.dark'
                    onClick={handleCopyURL}
                  >
                    Copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Flex w='full'>
        <Flex
          flex={1}
          borderBottom='1.5px solid white'
          justifyContent='center'
          pb={3}
          cursor='pointer'
        >
          <Text fontWeight='bold'>Threads</Text>
        </Flex>
        <Flex
          flex={1}
          borderBottom='1px solid gray'
          color='gray.light'
          justifyContent='center'
          pb={3}
          cursor='pointer'
        >
          <Text fontWeight='bold'>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  )
}

export default UserHeader
