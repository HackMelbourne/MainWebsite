import '../../styles/sponsors.css';
import React from 'react';

// Diamond
import redmarble_logo from '/img/sponsors/RedMarble/Red_Marble.png';
// import arcitecta_logo from '/img/sponsors/Arcitecta/arcitecta_logo.png';
// import tibra_logo from '/img/sponsors/Tibra/tibra_logo.png';
import integradev_logo from '/img/sponsors/IntegraDev/integra_dev_logo.png';

// Gold
import optiver_logo from '/img/sponsors/Optiver/optiver_logo.png';

// Silver
import bain_logo from '/img/sponsors/Bain/bain_logo.png';
// import csiro_logo from '/img/sponsors/CSIRO/CSIRO_logo_black.png';

function Sponsors() {
  return (
    <div className="sponsorsContainer">
      <h1 className="sponsHeading">HackMelbourne 2021 Sponsors</h1>
      <div className="diamondSponsor">
        <h1>Diamond Sponsors</h1>
        <table className="sponsorTable">
          <tr>
            <SponsorD link="https://redmarble.ai/" logo={redmarble_logo} sponsorName={'Red Marble'} alt="redmarble" />
            {/* <SponsorD link="https://www.arcitecta.com/" logo={arcitecta_logo} sponsorName={"Arcitecta"} alt="arcitecta"/> */}
            <SponsorD
              link="https://www.integradev.com.au/"
              logo={integradev_logo}
              sponsorName={'IntegraDev'}
              alt="integradev"
            />
            {/* <SponsorD link="https://www.tibra.com/" logo={tibra_logo} sponsorName={"Tibra"} alt="tibra"/> */}
          </tr>
          <tr></tr>
        </table>
      </div>
      <div class="separator" />
      <div className="platinumSponsor">
        <h1>Platinum Sponsors</h1>
        <table className="sponsorTable">
          <tr>
            <SponsorD link="https://www.optiver.com/" logo={optiver_logo} sponsorName={'Optiver'} alt="optiver" />
          </tr>
        </table>
      </div>
      <div class="separator" />
      <div className="goldSponsor">
        <h1>Gold Sponsors</h1>
        <table className="sponsorTable">
          <tr>
            <SponsorD link="https://www.bain.com/" logo={bain_logo} sponsorName={'Bain & Co.'} alt="bainandco" />
          </tr>
        </table>
      </div>
      <div class="separator" />
      <div className="silverSponsor">
        <h1>Silver Sponsors</h1>
        <table className="sponsorTable">
          <tr>
            <PlaceHolder tier="Silver" />
            {/* <SponsorD link="https://www.csiro.au/en/" logo={csiro_logo} sponsorName={"CSIRO"} alt="csiro"/> */}
          </tr>
        </table>
      </div>
    </div>
  );
}

function SponsorD(props) {
  return (
    <td>
      <a href={props.link}>
        <img className="sponsLogo" src={props.logo} alt="logo"></img>
        <p className="sponsName">{props.sponsorName}</p>
      </a>
    </td>
  );
}

function PlaceHolder(props) {
  return (
    <td>
      <a href="/sponsor_us">
        <h2 className="placeHolder">Be the first {props.tier} tier sponsor!</h2>
      </a>
    </td>
  );
}

export default Sponsors;
