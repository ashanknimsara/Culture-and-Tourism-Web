import "../../assets/styles/footer.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="pages">
          <ul>
            <h3>Culture & Tourism</h3>
            <li><a href="#">Home</a></li>
            <li><a href="#">Travel Blog</a></li>
            <li><a href="#">Accomodations</a></li>
            <li><a href="#">Tour Guide</a></li>
          </ul>

          <ul>
            <h3>About Us</h3>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Responsibilities</a></li>
            <li><a href="#">Our Values</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Stay in Touch</h3>
          <form>
            <input
              type="email"
              name="newsletter_email"
              id="newsletter_email"
              placeholder="Email"
            />
            <input type="button" value="Submit" />
          </form>
        </div>
      </div>
      <div className="social">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faYoutube} />
      </div>
      <div className="info">
        <div className="legal">
          <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a>
        </div>
        <div className="copyright">
  {new Date().getFullYear()} Copyright &copy; AF Api
</div>

      </div>
    </footer>
  );
};

export default Footer;
