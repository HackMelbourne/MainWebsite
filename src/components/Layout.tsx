import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';

// Components
import Navbar from '../components/Navbar';

// Styles
import '../styles/layout.css';

// Pathnames here will not have a navbar
const dontShowNavbarPathnames = ['/example'];

const Layout = () => {
  const location = useLocation();
  const [isShowNavbar, setIsShowNavbar] = useState(true);

  // Navbar conditional rendering
  useEffect(() => {
    console.log('useEffect!');
    const pathname = window.location.pathname;
    console.log(pathname);
    const isHidden = dontShowNavbarPathnames.some((path) => pathname.includes(path));
    setIsShowNavbar(!isHidden);
  }, [location]);

  const nav = {
    clubname: 'HackMelbourne',
    home: 'Home',
    home_link: '/',
    about: 'About Us',
    about_link: '/about',
    events: 'Events',
    events_link: '/events',
    sponsors: 'Sponsors',
    sponsors_link: '/sponsor',
    back: 'Back',
  }

  return (
    <>
      {' '}
      <div className="w-screen max-w-full">
        {isShowNavbar ? <Navbar 
          clubname={nav.clubname}
          home={nav.home}
          home_link={nav.home_link}
          about={nav.about}
          about_link={nav.about_link}
          events={nav.events}
          events_link={nav.events_link}
          sponsors={nav.sponsors}
          sponsors_link={nav.sponsors_link}
          back={nav.back}
        /> : null}
        <Outlet />

        {/* Background colours */}
        <ul className="w-screen max-w-full bg-circles -z-10 overflow-x-clip">
          <li className="w-[600px] h-[600px] md:w-[800px] md:h-[800px]"></li>
          <li className="md:w-[700px] md:h-[700px] hidden md:block"></li>
          <li className="w-[700px] h-[700px] md:w-[900px] md:h-[900px]"></li>
        </ul>
      </div>
      <div className="w-screen max-w-full h-screen fixed top-0 bg-neutral-950 -z-20"></div>
    </>
  );
};

export default Layout;
