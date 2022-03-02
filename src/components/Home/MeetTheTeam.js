import '../../styles/meetTheTeam.css';
import React from "react";
import ali from "../../img/team/hm-ali-m.jpg";
import apuroop from "../../img/team/hm-apuroop-c.JPG"
import chris from "../../img/team/hm-chris-l.jpg";
import daniel from "../../img/team/hm-daniel-m.PNG";
import deborah from "../../img/team/hm-deborah-l.jpg";
import fiona from "../../img/team/hm-fiona-z.jpg";
import ivan from "../../img/team/hm-ivan-b.png";
import jeeng from "../../img/team/hm-jeeng-l.png";
import jenny from "../../img/team/hm-jenny-w.jpg";
import joanne from "../../img/team/hm-joanne-n.jpg";
import jonathan from "../../img/team/hm-jonathan-j.jpg";
import keith from "../../img/team/hm-keith-l.png";
import kye from "../../img/team/hm-kye-c.jpg";
import leo from "../../img/team/hm-leo-h.jpg";
import ley from "../../img/team/hm-ley-l.jpg";
import matthew from "../../img/team/hm-matthew-k.jpg";
import muskaan from "../../img/team/hm-muskaan-d.jpeg";
import patricia from "../../img/team/hm-patricia-w.jpg";
import richard from "../../img/team/hm-richard-v.jpg";
import ryan from "../../img/team/hm-ryan-s.jpg";
import serena from "../../img/team/hm-serena-w.jpg";
import thanh from "../../img/team/hm-thanh-n.jpg";
import victoria from "../../img/team/hm-victoria-m.jpg";



function MeetTheTeam() {
  return (
    <div>
      <div className="meetTheTeamContainer">
        <h1 className="meetTheTeamTitle">Meet the team</h1>
        <div className="teamPhotos">
          <Team avatar={ali} name="Ali"/>
          <Team avatar={apuroop} name="Apuroop"/>
          <Team avatar={chris} name="Chris"/>
          <Team avatar={daniel} name="Daniel"/>
          <Team avatar={deborah} name="Deborah"/>
          <Team avatar={fiona} name="Fiona"/>
          <Team avatar={ivan} name="Ivan"/>
          <Team avatar={jeeng} name="Jeeng"/>
          <Team avatar={jenny} name="Jenny"/>
          <Team avatar={joanne} name="Joanne"/>
          <Team avatar={jonathan} name="Jonathan"/>
          <Team avatar={keith} name="Keith"/>
          <Team avatar={kye} name="Kye"/>
          <Team avatar={leo} name="Leo"/>
          <Team avatar={ley} name="Ley"/>
          <Team avatar={matthew} name="Matthew"/>
          <Team avatar={muskaan} name="Muskaan"/>
          <Team avatar={patricia} name="Patricia"/>
          <Team avatar={richard} name="Richard"/>
          <Team avatar={ryan} name="Ryan"/>
          <Team avatar={serena} name="Serena"/>
          <Team avatar={thanh} name="Thanh"/>
          <Team avatar={victoria} name="Victoria"/>
          {/* <Team avatar={} name=""/> */}
        </div>
      </div>
    </div>
  );
}

function Team(props) {
  return (
    <div>
      <img className="profile" src={props.avatar}></img>
      <p>{props.name}</p>
    </div>
  )
}


export default MeetTheTeam;