import React from 'react';
import Icon from '../Icons';
 
import "./ErrorPanel.scss"

const ErrorPanel = () => {
  return (
    <div className='error'>
      <div className="content">
        <div className='error-icon'>
            <Icon name={"no-results"} color="#d82121"> </Icon>
        </div>
        <div className="error-cities">
          No Results
        </div>
      </div>
    </div>
  );
}
 
 
export default ErrorPanel;