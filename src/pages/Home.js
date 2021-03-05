import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
      const userLogin = useSelector((state) => state.userLogin)
      const { userInfo } = userLogin
      
      const history = useHistory()

      useEffect(() => {
            if (!userInfo) {
              history.push('/login')
            }
      }, [history, userInfo])
      
      return (
            <main className = 'profile-page'>
                  {userInfo && (<div>
                  <h1>Hello {userInfo.name}!</h1>
                  <h2>Profile</h2>
                        <div className = 'user-info'>
                        <p><strong>Name:</strong> {userInfo.name}</p>
                  <p><strong>Company:</strong> {userInfo.company}</p>
                  <p><strong>Phone: </strong>{userInfo.phone}</p>
                        </div>
            </div>)}
            </main>
      )
}

export default Home
