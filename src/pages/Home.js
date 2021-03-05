import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'

const Home = () => {
      const userLogin = useSelector((state) => state.userLogin)
      const { userInfo } = userLogin
      
      const history = useHistory()

      const dispatch = useDispatch()
      const logoutHandler = () => {
            dispatch(logout())
      }

      useEffect(() => {
            if (!userInfo) {
              history.push('/login')
            }
      }, [history, userInfo])
      
      return (
            <main>
            {userInfo && (<div>
            <button onClick={logoutHandler} className = "nav-btn">Logout</button>
                  <h1>Hello {userInfo.name}</h1>
                  <h2>Profile</h2>
                  <p>Name: {userInfo.name}</p>
                  <p>Company: {userInfo.company}</p>
                        <p>Phone: {userInfo.phone}</p>
                  </div>)}
            </main>
      )
}

export default Home
