import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateUser } from "../../stores/features/user/userSlice"

export function Component() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(updateUser({}))
    navigate('/');
  })

  return (
    <></>
  )
}
