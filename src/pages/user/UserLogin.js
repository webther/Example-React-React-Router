import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateUser } from "../../stores/features/user/userSlice"

export function Component() {
  const usernameRef = useRef('jay')
  const passwordRef = useRef('password')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const doSubmitLogin = (e) => {
    e.preventDefault()

    // Update the current user values on the Redux store.
    dispatch(updateUser({
      uid: 1,
      username: usernameRef.current.value
    }))

    // Navigate to the home page.
    navigate('/')
  }

  return (
    <div>
      <h3>Log in</h3>
      <form className={'user-login'}>
        <div className={'form-item'}>
          <label>Username:</label> <input type="text" ref={usernameRef} defaultValue={usernameRef.current} />
        </div>
        <div className={'form-item'}>
          <label>Password:</label> <input type="password" ref={passwordRef} defaultValue={passwordRef.current} />
        </div>
        <div className={'form-item'}>
          <button
            onClick={(e) => doSubmitLogin(e)}>
            Log in
          </button>
        </div>
      </form>
    </div>
  )
}
