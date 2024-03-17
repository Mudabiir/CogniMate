import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import authService from './appwrite/auth'
import { Signup } from './components'
import { login,logout } from './store/authSlice'
import { useDispatch } from 'react-redux'



function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  

  return(
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      
    </>
  )
}

export default App
