import linkedIn from "../assets/svg/linkedin.svg";
import github from "../assets/svg/github.svg";

import "./Style/home.css";

export default function HomeSection() {
  return (
    <>
      <div className="home">
        <div className="home-hero">
          <h1 className="home-primary">hey, I'm Daniel Attali</h1>
          <div className="home-hero-info">
            <p className="home-text-primary">
              A third year B.Sc. Software Engineering student at JCT (Jerusalem College of Technology)
              
            </p>
          </div>
          <div className="home-hero-btn-">
            <a className="btn-lg" href="#projects">
              projects
            </a>
          </div>
        </div>
        <SocialsLinks />
      </div>
    </>
  );
}

function SocialsLinks() {
  return (
    <>
      <div className="home-hero-socials">
        <SocialLinks
          img={linkedIn}
          href="https://www.linkedin.com/in/daniel-attali-3885a1209/"
        />
        <SocialLinks img={github} href="https://github.com/dattali18/" />
      </div>
    </>
  );
}

interface SocialLinksProps {
  img: string;
  href: string;
}

function SocialLinks({ img, href }: SocialLinksProps) {
  return (
    <>
      <div className="home-hero-social">
        <a target="_blank" href={href} className="home-hero-social-link">
          <img
            src={img}
            alt="Daniel Attali Linkedin Profile"
            className="home-hero-social-icon"
          />
        </a>
      </div>
    </>
  );
}
