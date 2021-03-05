import React, { useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {register} from '../actions/userActions'
import Spinner from '../components/Spinner'

const Register = () => {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirmPassword, setConfirmPassword] = useState('')
      const [company, setCompany] = useState('')
      const [phone, setPhone] = useState('')

      const [nameError, setNameError] = useState('')
      const [emailError, setEmailError] = useState('')
      const [passwordError, setPasswordError] = useState('')
      const [confirmPasswordError, setConfirmPasswordError] = useState('')
      const [companyError, setCompanyError] = useState('')
      const [phoneError, setPhoneError] = useState('')

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

      const submitHandler = (e) => {
            e.preventDefault()
            if (email.trim().length > 0 && password.trim().length > 0 && email.match(regex) && password === confirmPassword) {
                  dispatch(register(email, password, name, company, phone))
            }
            else {
                  if (!email.match(regex)) {
                        setEmailError("Invalid email address")
                  }
                  if (password !== confirmPassword) {
                        setConfirmPasswordError('Passwords do not match')
                  }
                  if (email.trim().length === 0) {
                        setEmailError("Please enter your email address")
                  }
                  if (password.trim().length === 0) {
                        setPasswordError("Please enter your password")
                  }
                  if (name.trim().length === 0) {
                        setNameError("Please enter your name")
                  }
                  if (company.trim().length === 0) {
                        setCompanyError("Please enter your company name")
                  }
                  if (phone.trim().length === 0) {
                        setPhoneError("Please enter your phone number")
                  }
            }
      }

      const nameChangeHandler = (e) => {
            setName(e.target.value)
            setNameError('')
      }

      const emailChangeHandler = (e) => {
            setEmail(e.target.value)
            setEmailError('')
      }

      const passwordChangeHandler = (e) => {
            setPassword(e.target.value)
            setPasswordError('')
      }
      const confirmPasswordHandler = (e) => {
            setConfirmPassword(e.target.value)
            setConfirmPasswordError('')
      }
      const companyChangeHandler = (e) => {
            setCompany(e.target.value)
            setCompanyError('')
      }
      const phoneChangeHandler = (e) => {
            setPhone(e.target.value)
            setPhoneError('')
      }

      return (
            <main>
                  {loading && <div><Spinner/></div>}
                  <div>
                  <h1>SIGN UP</h1>
                  {error && <div>{error}</div>}
                  <form onSubmit={submitHandler}>
                        
                        <div>
                              <label>Name:     </label>
                              <input type="text" onChange={nameChangeHandler} value={name}></input>
                              {nameError && <small>{nameError}</small>}
                        </div>
                        <div>
                              <label>Email</label>
                              <input type="text" onChange={emailChangeHandler} value={email}></input>
                              {emailError && <small>{emailError}</small>}
                        </div>
                        <div>
                              <label>Password</label>
                              <input type="password" onChange={passwordChangeHandler} value={password}></input>
                              {passwordError && <small>{passwordError}</small>}
                        </div>
                        <div>
                              <label>Confirm Password</label>
                              <input type="password" onChange={confirmPasswordHandler} value={confirmPassword}></input>
                              {confirmPasswordError && <small>{confirmPasswordError}</small>}
                        </div>
                        <div>
                              <label>Company</label>
                              <input type="text" onChange={(companyChangeHandler)} value={company}></input>
                              {companyError && <small>{companyError}</small>}
                        </div>     
                        <div>
                              <label>Phone</label>
                              <input type="text" onChange={(phoneChangeHandler)} value={phone}></input>
                              {phoneError && <small>{phoneError}</small>}
                        </div>        
                        <button type="submit">SIGN UP</button>
                        <Link to = '/login'>Already have an account? Login here</Link>
            </form>
                  </div>
            </main>
      )
}

export default Register