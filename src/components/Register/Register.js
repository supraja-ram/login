import React, { useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {register} from '../../actions/userActions'
import Spinner from '../Spinner'

export const validateRegisterInput = (email, password, confirmPassword, name,company, phone, regex) => {
      if (!email.match(regex) || password !== confirmPassword || email.trim().length === 0 || password.trim().length === 0 || name.trim().length === 0 || company.trim().length === 0 || phone.trim().length === 0) {
            return false
      }
      return true
}

export const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"

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

      const submitHandler = (e) => {
            e.preventDefault()
            if (validateRegisterInput(email, password, confirmPassword, name,company, phone, regex)) {
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
                  {error && <div>{error}</div>}
                  <form className = "login-form" onSubmit={submitHandler}> 
                        <h1>SIGN UP</h1>
                        <div className = 'form-group'>
                              <input type="text" onChange={nameChangeHandler} value={name}></input>
                              <label>Name:     </label>
                              {nameError && <small  className = 'error-alert'>{nameError}</small>}
                        </div>
                        <div className = 'form-group'>
                              <input type="text" onChange={emailChangeHandler} value={email}></input>
                              <label>Email</label>
                              {emailError && <small  className = 'error-alert'>{emailError}</small>}
                        </div>
                        <div className = 'form-group'>
                              <input type="password" onChange={passwordChangeHandler} value={password}></input>
                              <label>Password</label>
                              {passwordError && <small  className = 'error-alert'>{passwordError}</small>}
                        </div>
                        <div className = 'form-group'>
                              <input type="password" onChange={confirmPasswordHandler} value={confirmPassword}></input>
                              <label>Confirm Password</label>
                              {confirmPasswordError && <small  className = 'error-alert'>{confirmPasswordError}</small>}
                        </div>
                        <div className = 'form-group'>
                              <input type="text" onChange={(companyChangeHandler)} value={company}></input>
                              <label>Company</label>
                              {companyError && <small  className = 'error-alert'>{companyError}</small>}
                        </div>     
                        <div className = 'form-group'>
                              <input type="text" onChange={(phoneChangeHandler)} value={phone}></input>
                              <label>Phone</label>
                              {phoneError && <small  className = 'error-alert'>{phoneError}</small>}
                        </div>        
                        <button  className = 'btn' type="submit">SIGN UP</button>
                              <Link style={{ textDecoration: 'none' }} to='/login'><span className="redirect-link">Already have an account? Login here</span></Link>
                              
                  {loading && <div><Spinner/></div>}
            </form>
                  </div>
            </main>
      )
}

export default Register