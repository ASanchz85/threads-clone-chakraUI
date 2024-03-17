import { useToast } from '@chakra-ui/react'

function useShowToast () {
  const toast = useToast()
  const showToast = (error, message) => {
    toast({
      title: !error ? 'Success' : 'An error occurred.',
      description:
        error && error.message
          ? error.message ?? 'Something went wrong.'
          : message,
      status: !error ? 'success' : 'error',
      duration: 3000,
      isClosable: true
    })
  }

  return showToast
}

export default useShowToast
