import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

// Styles
import '../styles/gradients.css';

// Images
// Change image to remove the bottom text
import HM_White_Transparent from '/img/HM_White_Transparent.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="w-full max-w-[800px] fixed pt-8 z-50">
        <div className="max-w-[800px] grow rounded-md bg-white/20 backdrop-blur-md border flex justify-between items-center px-5 py-3">
          <Link to="/" className="flex items-center justify-start gap-2 font-bold">
            <img src={HM_White_Transparent} className="h-8 w-8"></img>
            HackMelbourne
          </Link>
          {/* MOBILE */}
          {/* Add link to modal popup */}
          <button className=" md:hidden">
            <MenuIcon />
          </button>

          {/* DESKTOP */}
          <div className="hidden md:flex justify-end gap-6 items-center">
            <Link to="/index">About us</Link>
            <Link to="/index">Events</Link>
            <Link to="/index">Sponsors</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
