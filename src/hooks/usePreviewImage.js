/* global FileReader */
import { useState } from 'react'
import useShowToast from './useShowToast'

function usePreviewImage () {
  const [imgUrl, setImgUrl] = useState(null)
  const showToast = useShowToast()

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImgUrl(reader.result)
        reader.onloadend = null
      }
      reader.readAsDataURL(file)
    } else {
      showToast(new Error('image/type incorrect'), 'Please select an image file')
      setImgUrl(null)
    }
  }

  return { imgUrl, handleImageChange }
}

export default usePreviewImage
