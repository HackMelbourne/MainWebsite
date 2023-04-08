import '../../styles/whatWeDo.css';
import React from 'react';
import MainHackathon from '/img/MainHackathon.png';
import RookieHackathon from '/img/RookieHackathon.png';
import EducationProgram from '/img/EducationProgram.png';
import { Link } from 'react-router-dom';

function WhatWeDo() {
  return (
    <div className="whatWeDoContainer">
      <div className="homeContent">
        <h1 className="initiativeheader">
          <a href="/initiatives">Our Initiatives</a>
        </h1>
        <div className="whatWeDoPrograms">
          <Link to="/initiatives" className="program">
            <img className="programImg" src={MainHackathon} alt="An illustration of people building a website"></img>
            <p className="programTitle">Melbourne Hack</p>
            <p>Melbourne Hackathon</p>
          </Link>
          <Link to="/initiatives" className="program">
            <img
              className="programImg"
              src={RookieHackathon}
              alt="An illustraion of a person programing at a desk"></img>
            <p className="programTitle">Hackiethon</p>
            <p>Virtual Rookie Hackathon</p>
          </Link>
          <Link to="/initiatives" className="program">
            <img
              className="programImg"
              src={EducationProgram}
              alt="An illustraion of a rocket shooting up from a laptop"></img>
            <p className="programTitle">DecodED</p>
            <p>Education Program</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
