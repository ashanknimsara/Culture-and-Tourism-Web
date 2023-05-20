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
            <h5>Culture & Tourism</h5>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Travel Blog</a></li>
            <li><a href="/accomodations">Accomodations</a></li>
            <li><a href="tour-guides">Tour Guide</a></li>
          </ul>

          <ul>
            <h5>About Us</h5>
            <li><a href="/contac">Contact Us</a></li>
            <li><a href="/responsibilities">Our Responsibilities</a></li>
            <li><a href="/values">Our Values</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h5>Stay in Touch</h5>
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
          <a href="TermsAndConditions">Terms & Conditions</a><a href="/PrivacyPolicy">Privacy Policy</a>
        </div>
        <div className="copyright">
  {new Date().getFullYear()} Copyright &copy; AF Api
</div>

      </div>
    </footer>
  );
};

export default Footer;
