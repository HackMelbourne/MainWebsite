import React from 'react';
import './text.css';

const Text = () => {
  return (
    <div className="textContainer">
      <div className="subHeader">Make the Change.</div>
      <div className="blurbText">
        Join us from the 5th to 7th of May 2023 as HackMelbourne is hosting a hackathon event for university students of
        any field, centered around sustainability. This event presents a unique opportunity for students to make a
        change by showcasing their skills and creativity to develop innovative solutions to address pressing global
        issues. Alongside collaborating with like-minded individuals, mentors, and industry experts, students can
        participate in workshops, enjoy free food and snacks.
      </div>
      <a
          href="https://scented-noodle-4c2.notion.site/Participants-Handbook-38985d7de2624e15aef203fcdad8063b"
          target="_blank">
      <button>
          Join Now!
      </button>
      </a>
    </div>
  );
};

export default Text;
