import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange}) =>{
    return(
        <header className="bg-black-90 fixed w-100 ph5-l z-999 ">
        <ul className="f6 fw6 ttu tracked">
          <li className="link dim white dib mr3" title="Home" onClick={() => onRouteChange('home')}>Home</li>
          <li className="link dim white dib mr3" title="About" onClick={() => onRouteChange('udpate')}>Update Tables</li>
        </ul>
      </header>
    )
}

export default Navigation;