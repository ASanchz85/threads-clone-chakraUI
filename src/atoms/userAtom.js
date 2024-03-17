import { atom } from 'recoil'

const userAtom = atom({
  key: 'userAtom',
  default: JSON.parse(window.localStorage.getItem('user-threads')) ?? null
})

export default userAtom
