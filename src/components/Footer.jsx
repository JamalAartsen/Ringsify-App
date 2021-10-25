import React from "react";
import InstagramImage from "../images/instagram-icon.png";
import GithubImage from "../images/github-icon.png";
import LinkedinImage from "../images/linkedin-icon.png"
import FooterImg from "./FooterImg";

function Footer() {
    return (
        <div className="footer">
            <footer>
                <FooterImg link="https://www.linkedin.com/in/jamal-aartsen-35a47615b/" image={LinkedinImage} imageTextAlt="linkedin-img" />
                <FooterImg link="https://www.instagram.com/ijamall_/" image={InstagramImage} imageTextAlt="instagram-img" />
                <FooterImg link="https://github.com/JamalAartsen?tab=repositories" image={GithubImage} imageTextAlt="github-img" />
                <p className="footer-text">&copy; {new Date().getFullYear()} Jamal Aartsen</p>
                <p className="icons8-text">Icons provided by <a className="icons8-link" href="https://icons8.com/">icons8</a></p>
            </footer>
        </div>
    );
}

export default Footer;