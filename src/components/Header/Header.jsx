import React, { useContext, useState } from 'react';
import { CityContext } from '../../Context/CityContext';

import BRLogo from '../Icons/Common/BRLogo';
import "./Header.scss";

const Header = () => {

  const [celsiusActive, setCelsiusActive] = useState(true);
  const context = useContext(CityContext)

  return (
    <div className="header">
      <div className="logo-container">
        <BRLogo />
        <div>
          Weather
        </div>
      </div>
      <div className="type-container">
        <button className={celsiusActive ? "active" : "deactive"} onClick={() => {context.setIsCelsius(false); setCelsiusActive(true)}}>F°</button>
        <button className={!celsiusActive ? "active" : "deactive"} onClick={() =>{context.setIsCelsius(true); setCelsiusActive(false)}}>C°</button>
      </div>
    </div>
  );
};

export default Header;