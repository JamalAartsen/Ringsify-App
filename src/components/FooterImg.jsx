import React from "react";

function FooterImg(props) {
    return (
        <a className="footer-link" href={props.link} target="_blank" rel="noreferrer">
          <img className="footer-img" src={props.image} alt={props.imageTextAlt} />  
        </a>
    );
}

export default FooterImg;