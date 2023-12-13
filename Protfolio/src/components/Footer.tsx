import github from "../assets/svg/github-w.svg";
import email from "../assets/svg/email-w.svg";
import linkedin from "../assets/svg/linkedin-w.svg";
import location from "../assets/svg/Location-on-w.svg";
import phone from "../assets/svg/phone-w.svg";

import "./Style/footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-main">
        <div className="main-container">
          <div className="footer-main-upper">
            <div className="footer-main-row1">
              <h2 className="footer-main-heading">Daniel Attali</h2>
              <p className="footer-main-text">
                A third year B.Sc. Software Engineering student at JCT
                (Jerusalem College of Technology)
              </p>
            </div>
            <div className="footer-main-row2">
              <h2 className="footer-main-heading">Social</h2>
              <div className="footer-main-links">
                <FooterIcon
                  title="danielattali16@gmail.com"
                  href="mailto:danielattali16@gmail.com"
                  img={email}
                />
                <FooterIcon
                  title="054-9658737"
                  href="tel:0549658737"
                  img={phone}
                />
                <FooterIcon
                  title="Jerusalem, Israel"
                  href="https://www.google.com/maps/d/viewer?mid=1HGCV51R8lmS3NfpPRBj8WVOJo2g&hl=en_US&ll=31.779546999999997%2C35.210838&z=17"
                  img={location}
                />
                <FooterIcon
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/daniel-attali-3885a1209/"
                  img={linkedin}
                />
                <FooterIcon
                  title="github/dattali18"
                  href="https://github.com/dattali18/"
                  img={github}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

interface FooterIcon {
  title: string;
  href: string;
  img: string;
}

function FooterIcon({ title, href, img }: FooterIcon) {
  return (
    <>
      <div className="main-link">
        <a href={href} target="_blank">
          <h3 className="main-link-title">{title}</h3>
          <img src={img} alt="icon" className="main-link-img" />
        </a>
      </div>
    </>
  );
}
