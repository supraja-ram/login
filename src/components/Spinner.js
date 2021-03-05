import Loader from "react-loader-spinner";
import React from 'react'

const Spinner = () => {
      return (
            <div className = 'spinner'>
            <Loader
            type="ThreeDots"
            color="#000"
            height={30}
            width={30}
          />
            </div>
      )
}

export default Spinner