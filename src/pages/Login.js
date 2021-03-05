import React, { useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../actions/userActions'
import Spinner from '../components/Spinner'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const Login = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [emailError, setEmailError] = useState('')
      const [passwordError, setPasswordError] = useState('')
      const [visibility, setVisibility] = useState(false)

      const inputType = visibility ? 'text' : 'password'

      const history = useHistory()
      const dispatch = useDispatch()

      const userLogin = useSelector(state => state.userLogin)
      const { userInfo, loading, error } = userLogin

      useEffect(() => {
            if (userInfo) {
                  history.push('/')
            }
      }, [history, userInfo])

      
      const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"

      const emailChangeHandler = (e) => {
            setEmail(e.target.value)
            setEmailError('')
      }

      const passwordChangeHandler = (e) => {
            setPassword(e.target.value)
            setPasswordError('')
      }

      const submitHandler = (e) => {
            e.preventDefault()
            if (email.trim().length > 0 && password.trim().length > 0 && email.match(regex)) {
                  dispatch(login(email, password))
            }
            else {
                  if (!email.match(regex)) {
                        setEmailError("Invalid email address")
                  }
                  if (email.trim().length === 0) {
                        setEmailError("Please enter your email address")
                  }
                  if (password.trim().length === 0) {
                        setPasswordError("Please enter your password")
                  }
            }
      }

      return (
            <main className = "login">
                  <div>
                  {error && <div className = 'error-alert'>{error}</div>}
                        <form className="login-form" onSubmit={submitHandler}>        
                        <h1>LOGIN</h1>
                        <div className = 'form-group'>
                                    <input type="text" onChange={emailChangeHandler} value={email}></input><label>Email</label>
                                    {emailError && <small className = 'error-alert'>{emailError}</small>}
                        </div>
                        <div className = 'form-group'>
                                    <input type={inputType} onChange={passwordChangeHandler} value={password}></input>
                                    <label>Password</label>
                                    <span className = 'icon' onClick={(e)=>setVisibility(!visibility)}>{visibility ? <AiFillEye/> : <AiFillEyeInvisible/>}</span>
                                    {passwordError && <small className = 'error-alert'>{passwordError}</small>}
                        </div>
                        <button className = 'btn' type="submit">LOGIN</button>
                              <Link to='/register' style={{ textDecoration: 'none' }} ><span className="redirect-link">Don't have an account ? Sign Up</span></Link>            
                  {loading && <div><Spinner/></div>}
                  </form></div>
            </main>
      )
}

export default Login