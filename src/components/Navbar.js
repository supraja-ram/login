import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'

const Navbar = () => {
      const userLogin = useSelector((state) => state.userLogin)
      const { userInfo } = userLogin

      const dispatch = useDispatch()
      const logoutHandler = () => {
            dispatch(logout())
      }

      return (
            <nav>
            {userInfo && (<div>
                        <button onClick={logoutHandler} className="btn btn-solid">Logout</button></div>)}
            </nav>
      )
}

export default Navbar
