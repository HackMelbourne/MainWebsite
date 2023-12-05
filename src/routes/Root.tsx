import React from 'react';

// Component Imports
import HeroBanner from '../components/Home/HeroBanner';
import DescriptionBoxes from '../components/Home/DescriptionBoxes';
import BannerStandard from '../components/Home/BannerStandard';
import JoinTheTeam from '../components/Home/JoinTheTeam';

function Root() {
  // Temp event values
  const events = [
    {
      title: 'First Event Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      title: 'Second Event Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      title: 'Third Event Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
  ];

  const hoodie_img = '/img/hoodie.png'; // should change
  const hoodie_title = 'HackMelbourne 2023 Exclusive Hoodie';
  const hoodie_desc = 'Remember the amazing year of 2023 and our achievements.';
  const hoodie_button = 'See details';
  const hoodie_link = 'https://www.amazon.com.au'; // lol idk where the link is

  return (
    <div className="w-screen max-w-full pt-28">
      <HeroBanner />
      <DescriptionBoxes events={events} />
      <BannerStandard
        img={hoodie_img}
        title={hoodie_title}
        desc={hoodie_desc}
        button={hoodie_button}
        link={hoodie_link}
      />
      <JoinTheTeam />
    </div>
  );
}

export default Root;
