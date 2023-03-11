import React from 'react';
import '../styles/footer.css';
import {FaDiscord, FaEnvelope, FaFacebook, FaLinkedin} from 'react-icons/fa'

const Footer=() => {
  return (
    <footer>
        <div>
          <a href="https://discord.gg/tEQ5m6ayTV" target="_blank" rel="noopener noreferrer" class="icon">
            <FaDiscord />
          </a>
          <a href="https://www.facebook.com/hackmelbourne" target="_blank" rel="noopener noreferrer" class="icon"><FaFacebook /></a>
          <a href="https://www.linkedin.com/company/hackmelbourne/" target="_blank" rel="noopener noreferrer" class="icon"><FaLinkedin /></a>
          <a href="mailto:hackmelb.team@gmail.com" class="icon"><FaEnvelope /></a>
        </div>
    </footer>
  )
};
export default Footer;