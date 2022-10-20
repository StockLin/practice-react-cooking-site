import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MainLayout.css';


interface IProps {
  children?: React.ReactNode
}

const MainLayout : React.FC<IProps> = ({ children }) => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState<string>('/');
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  return (
    <div className='wrapper'>
      <div className="bg-image" style={{ backgroundImage: "url('./images/bg-food-2.jpg')"}}></div>
      {/* navbar */}
      <header>
      <div className="navbar">
        <div className="container">
          <div className="navbar__logo">
            <img src='./images/logo.png' alt="" />
          </div>

          <div className="navbar__content">
            <div className="navbar__search">
              <i className="fa-solid fa-magnifying-glass" onClick={() => setToggleSearch(!toggleSearch)}></i>
              <input type="text" className={`navbar__search-input ${toggleSearch ? 'visible' : ''}`} placeholder='請輸入' />
            </div>
            <ul className="nav">
                <li className="nav__item">
                  <Link to="/" className={`nav__link ${(currentLocation === '/') ? 'active' : ''}`}>
                    Recipes
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/dinner-tv" className={`nav__link ${(currentLocation === '/dinner-tv') ? 'active' : ''}`}>
                    Dinner TV
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/cooking-school" className={`nav__link ${(currentLocation === '/cooking-school') ? 'active' : ''}`}>
                    Cooking School
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/about" className={`nav__link ${(currentLocation === '/about') ? 'active' : ''}`}>
                    About
                  </Link>
                </li>
            </ul>
            <div className="btn">Sign In</div>
          </div>
        </div>
      </div>
      </header>

      {/* main content */}
      <section className="main">
        { children }
      </section>
    </div>
  )
}

export default MainLayout;