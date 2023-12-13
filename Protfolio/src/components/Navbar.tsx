import personalImage from "../assets/img-danielattali.jpg";
import "./Style/navbar.css"

export default function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-logo">
          <div className="nav-logo-img">
            <img src={personalImage} alt="image of Daniel Attali" />
          </div>
          <span className="nav-logo-header">daniel attali</span>
        </div>
        <div className="nav-links">
          <ul className="nav-links-list">
            <NavbarLink title="home" href="#" />
            <NavbarLink title="about" href="#about" />
            <NavbarLink title="projects" href="#projects" />
            <NavbarLink title="contact" href="#contact" />
          </ul>
        </div>
      </nav>
    </>
  );
}

interface NavbarLinkProps {
  title: string;
  href: string;
}

function NavbarLink({ title, href }: NavbarLinkProps) {
  return (
    <>
      <li className="nav-links-item">
        <a href={href} rel="noopener noreferrer">
          {title}
        </a>
      </li>
    </>
  );
}
