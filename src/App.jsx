import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { UserPage, PostPage, HomePage, AuthPage } from './pages'
import Header from './components/Header'

function App () {
  return (
    <Container maxW='620px'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/login'
          element={<AuthPage />}
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
    </Container>
  )
}

export default App
