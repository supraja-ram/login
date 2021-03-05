import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
      try {
            dispatch({
                  type: 'USER_LOGIN_REQUEST',
            })

            const config = {
                  headers: {
                        'Content-Type': 'application/json',
                  },
            }
    
            const { data } = await axios.post(
                  `${process.env.REACT_APP_BASEURL}/api/v1/login?email=${email}`,
                  { email, password },
                  config
            )
    
            dispatch({
                  type: 'USER_LOGIN_SUCCESS',
                  payload: data,
            })
    
            localStorage.setItem('userInfo', JSON.stringify(data))
      } catch (error) {
            dispatch({
                  type: 'USER_LOGIN_FAIL',
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const register = (email, password, name, company, phone) => async (dispatch) => {
      try {
            dispatch({
                  type: 'USER_REGISTER_REQUEST',
            })
    
            const config = {
                  headers: {
                        'Content-Type': 'application/json',
                  },
            }
    
            const { data } = await axios.post(
                  `${process.env.REACT_APP_BASEURL}/api/v1/login`,
                  { email, password, name, company, phone },
                  config
            )
    
            dispatch({
                  type: 'USER_REGISTER_SUCCESS',
                  payload: data,
            })
            dispatch({
                  type: 'USER_LOGIN_SUCCESS',
                  payload: data,
            })
            
            localStorage.setItem('userInfo', JSON.stringify(data))
      } catch (error) {
            dispatch({
                  type: 'USER_REGISTER_FAIL',
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const logout = () => (dispatch) => {
      localStorage.removeItem('userInfo')
      try {
            dispatch({
                  type: 'USER_LOGOUT'
            })
      }
      catch (err) {
            
      }
}