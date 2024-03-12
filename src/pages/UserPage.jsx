import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

function UserPage () {
  return (
    <>
      <UserHeader />
      <UserPost likes={1200} replies={481} postImg='/post1.png' title="Let's talk about threads" />
      <UserPost likes={312} replies={11} postImg='/post2.png' title='Nice course' />
      <UserPost likes={42} replies={1042} postImg='/post3.png' title="What's new on..." />
      <UserPost likes={42} replies={1042} title='My first post here!!' />
    </>
  )
}

export default UserPage
