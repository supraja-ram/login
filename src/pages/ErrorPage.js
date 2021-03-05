import React from 'react'
import { Link } from 'react-router-dom'
import errorSVG from '../error.svg'

const ErrorPage = ({message = 'Page not fround'}) => {
      return (
            <div>
                  <img src={errorSVG} alt="error-svg" />
                  <h1>{message}</h1>
                  <Link to = "/">Back to Home Page</Link>
            </div>
      )
}

export default ErrorPage
