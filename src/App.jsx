import { Container } from '@chakra-ui/react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserPage, PostPage, HomePage, AuthPage } from './pages'
import Header from './components/Header'
import { useRecoilValue } from 'recoil'
import userAtom from './atoms/userAtom'
import LogOutButton from './components/LogOutButton'
import UpdateProfilePage from './pages/UpdateProfilePage'

function App () {
  const user = useRecoilValue(userAtom)

  return (
    <Container maxW='620px'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={user ? <HomePage /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={!user ? <AuthPage /> : <Navigate to='/' />}
        />
        <Route
          path='/update'
          element={user ? <UpdateProfilePage /> : <Navigate to='/login' />}
        />
        <Route
          path='/:username'
          element={<UserPage />}
        />
        <Route
          path='/:username/post/:pid'
          element={<PostPage />}
        />
      </Routes>
      {user && <LogOutButton />}
    </Container>
  )
}

export default App
