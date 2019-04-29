import React from 'react';

function Footer() {
  return (
    <footer className="landing_footer">
      <div className="footer_top">
        <div>
          <h3>MyHouse</h3>
          <span>Team</span>
          <span>Repository</span>
        </div>
        <div>
          <span>Connect</span>
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram" />
          <i className="fab fa-github" />
          <i className="fab fa-facebook" />
          <i className="fab fa-linkedin" />
        </div>
      </div>
      <div className="footer_bottom">
        <span>2019 MyHouse</span>
        <span>Privacy Policy</span>
        <span>Terms &amp; Conditions</span>
      </div>
    </footer>
  );
}

export default Footer;
