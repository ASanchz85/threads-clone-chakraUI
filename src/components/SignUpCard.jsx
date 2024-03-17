import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useSetRecoilState } from 'recoil'
import authScreenAtom from '../atoms/authAtom'
import setOptionsFetch from '../utils/setOptionsFetch'
import useShowToast from '../hooks/useShowToast'
import { useNavigate } from 'react-router-dom'
import userAtom from '../atoms/userAtom'

const initialValueInput = {
  name: '',
  username: '',
  email: '',
  password: ''
}

export default function SignupCard () {
  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState(initialValueInput)
  const setAuthScreen = useSetRecoilState(authScreenAtom)
  const setUser = useSetRecoilState(userAtom)
  const showToast = useShowToast()
  const navigate = useNavigate()

  const handleSignup = async () => {
    try {
      const res = await fetch(
        '/api/users/signup',
        setOptionsFetch('POST', inputValue)
      )
      const data = await res.json()
      if (data && data.error) {
        throw new Error(data.error)
      }

      const { data: userData } = data
      window.localStorage.setItem('user-threads', JSON.stringify(userData))
      setUser(userData)
      showToast(null, 'You have been signed up.')
      navigate('/' + userData.username)
    } catch (error) {
      showToast(error, 'An error occurred.')
    }
  }

  return (
    <Flex
      align='center'
      justify='center'
    >
      <Stack
        spacing={8}
        mx='auto'
        maxW='lg'
        py={12}
        px={6}
      >
        <Stack align='center'>
          <Heading
            fontSize='4xl'
            textAlign='center'
          >
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded='lg'
          bg={useColorModeValue('white', 'gray.dark')}
          boxShadow='lg'
          p={8}
          w={{
            base: 'full',
            sm: '400px'
          }}
        >
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Full name</FormLabel>
              <Input
                type='text'
                onChange={(e) =>
                  setInputValue({ ...inputValue, name: e.target.value })}
                value={inputValue.name}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type='text'
                onChange={(e) =>
                  setInputValue({ ...inputValue, username: e.target.value })}
                value={inputValue.username}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                onChange={(e) =>
                  setInputValue({ ...inputValue, email: e.target.value })}
                value={inputValue.email}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, password: e.target.value })}
                  value={inputValue.password}
                />
                <InputRightElement h='full'>
                  <Button
                    variant='ghost'
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack
              spacing={10}
              pt={2}
            >
              <Button
                loadingText='Submitting'
                size='lg'
                bg={useColorModeValue('gray.500', 'gray.700')}
                color='white'
                _hover={{
                  bg: useColorModeValue('gray.600', 'gray.600')
                }}
                onClick={handleSignup}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align='center'>
                Already a user?{' '}
                <Link
                  color='blue.400'
                  onClick={() => setAuthScreen('login')}
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
