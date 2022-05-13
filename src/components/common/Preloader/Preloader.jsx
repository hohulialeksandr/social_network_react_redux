import React from 'react';
import preloader from '../../../assets/image/Loading_icon.gif'

const Preloader = (props) => {
  return (
    <div>
        <img src={preloader} height='160px' width='225px' alt=''/>
    </div>
  )
}

export default Preloader