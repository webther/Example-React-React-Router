import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Header from "../shared/Header"
import Footer from "../shared/Footer"

const FullLayout = () => {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.uid) {
      navigate('/user/login')
    }
  })

  return (
    <div>
      {user?.uid ? (
        <>
          <Header/>
          <main><Outlet/></main>
          <Footer/>
        </>
        ) : ''
      }
    </div>
  )
}

export default FullLayout
