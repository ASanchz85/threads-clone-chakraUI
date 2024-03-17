import { Button } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import userAtom from '../atoms/userAtom'
import setOptionsFetch from '../utils/setOptionsFetch'
import useShowToast from '../hooks/useShowToast'
import { FiLogOut } from 'react-icons/fi'

function LogOutButton () {
  const setUser = useSetRecoilState(userAtom)
  const showToast = useShowToast()

  const handleLogOut = async () => {
    try {
      const res = await fetch('/api/users/logout', setOptionsFetch('POST'))
      const data = await res.json()
      if (data && data.error) {
        throw new Error(data.error)
      }
      showToast(null, data.message)
      window.localStorage.removeItem('user-threads')
      setUser(null)
    } catch (error) {
      showToast(error, 'An error occurred.')
    }
  }

  return (
    <Button
      position='fixed'
      top='30px'
      right='30px'
      size='sm'
      onClick={handleLogOut}
    >
      <FiLogOut size={20} />
    </Button>
  )
}

export default LogOutButton
