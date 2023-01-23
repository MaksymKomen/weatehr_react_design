import React from 'react';
import Icon from '../Icons';
 
import "./Loading.scss"

const Loading = () => {
  return (
    <div className='loading'>
      <div className="content">
        <div className='loading-icon'>
            <Icon name={"loading"} color="#d82121"> </Icon>
        </div>
        <div className="loading-cities">
          Loading cities
        </div>
      </div>
    </div>
  );
}
 
 
export default Loading;