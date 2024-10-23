import React from "react";

const footerStyle = {
  backgroundColor: "#2c3e50",
  color: "#ecf0f1",
  padding: "40px 20px",
  textAlign: "left",
};

const footerContentStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
};

const footerSectionStyle = {
  flex: 1,
  margin: "10px",
  minWidth: "200px",
};

const footerSectionHeadingStyle = {
  marginTop: "0",
};

const footerSectionTextStyle = {
  margin: "0",
  padding: "0",
};

const footerSectionListStyle = {
  paddingLeft: "0",
  listStyle: "none",
};

const footerSectionListItemStyle = {
  marginBottom: "10px",
};

const footerLinkStyle = {
  color: "#ecf0f1",
  textDecoration: "none",
};

const footerBottomStyle = {
  textAlign: "center",
  marginTop: "20px",
  borderTop: "1px solid #34495e",
  paddingTop: "10px",
};

const iconStyle = {
  fontSize: "48px",
  color: "#ecf0f1",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "#2c3e50",
  color: "#ecf0f1",
};

const itemStyle = {
  textAlign: "center",
};

const itemHeadingStyle = {
  margin: "10px 0 5px",
  fontSize: "20px",
  color: "#ecf0f1",
};

const itemTextStyle = {
  margin: "0",
  fontSize: "14px",
  color: "#ecf0f1",
};

// Media queries for responsive design
const mediaQueries = `
  @media (max-width: 1200px) {
    .footerContent {
      flex-direction: column;
      align-items: center;
    }
    .footerSection {
      margin: 20px 0;
      text-align: center;
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    .iconStyle {
      fontSize: "36px";
    }
    .itemHeadingStyle {
      fontSize: "18px";
    }
    .itemTextStyle {
      fontSize: "12px";
    }
  }

  @media (max-width: 480px) {
    .footerSectionListItemStyle {
      marginBottom: "5px";
    }
    .itemStyle {
      margin: 10px 0;
    }
  }
`;

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <style>{mediaQueries}</style>
      <div style={footerContentStyle} className="footerContent">
        <div style={footerSectionStyle} className="footerSection">
          <h2 style={footerSectionHeadingStyle}>About Rock's Fitness</h2>
          <p style={footerSectionTextStyle}>
            At Rock's Fitness, we empower individuals to achieve their fitness
            goals with top-notch facilities and expert guidance.
          </p>
        </div>
        <div style={footerSectionStyle} className="footerSection">
          <h2 style={footerSectionHeadingStyle}>Quick Links</h2>
          <ul style={footerSectionListStyle}>
            <li style={footerSectionListItemStyle}>
              <a href="/bikemate" style={footerLinkStyle}>
                Find a Gym
              </a>
            </li>
            <li style={footerSectionListItemStyle}>
              <a href="/about" style={footerLinkStyle}>
                About Us
              </a>
            </li>
            <li style={footerSectionListItemStyle}>
              <a href="/t&c" style={footerLinkStyle}>
                Terms & Conditions
              </a>
            </li>
            <li style={footerSectionListItemStyle}>
              <a href="/privacy" style={footerLinkStyle}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div style={footerSectionStyle} className="footerSection">
          <h2 style={footerSectionHeadingStyle}>Contact Us</h2>
          <p style={footerSectionTextStyle}>
            Email:{" "}
            <a href="mailto:info@rocksfitness.com" style={footerLinkStyle}>
              info@rocksfitness.com
            </a>
          </p>
          <p style={footerSectionTextStyle}>
            Phone:{" "}
            <a href="tel:+917984174452" style={footerLinkStyle}>
              +91 7984174452
            </a>
          </p>
        </div>
        <div style={footerSectionStyle} className="footerSection">
          <h2 style={footerSectionHeadingStyle}>Follow Us</h2>
          <div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={footerLinkStyle}
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...footerLinkStyle, marginLeft: "10px" }}
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...footerLinkStyle, marginLeft: "10px" }}
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...footerLinkStyle, marginLeft: "10px" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div style={containerStyle} className="container">
        <div style={itemStyle}>
          <i className="fas fa-dumbbell icon" style={iconStyle}></i>
          <h3 style={itemHeadingStyle}>World-Class Facilities</h3>
          <p style={itemTextStyle}>State-of-the-art equipment</p>
        </div>
        <div style={itemStyle}>
          <i className="fas fa-users icon" style={iconStyle}></i>
          <h3 style={itemHeadingStyle}>Community</h3>
          <p style={itemTextStyle}>Join a like-minded group</p>
        </div>
        <div style={itemStyle}>
          <i className="as fa-award icon" style={iconStyle}></i>
          <h3 style={itemHeadingStyle}>Award-Winning Service</h3>
          <p style={itemTextStyle}>Best trainers in the industry</p>
        </div>
        <div style={itemStyle}>
          <i className="fas fa-heartbeat icon" style={iconStyle}></i>
          <h3 style={itemHeadingStyle}>Personalized Programs</h3>
          <p style={itemTextStyle}>For every fitness goal</p>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p>&copy; 2024 Rock's Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
