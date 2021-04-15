import React from 'react';
import './carousel-profile.css';
import ApolloPNG from '../img/url.png';

function ProfilesCarousel(props:any) {
    return(
 
            <div className="profileItem" id={props.id} >
                <div className="image-container">
                    <img src={props.source} id={props.pfpid} style={props.style} className="profileIcon" alt="CarouselProfilePhoto"/>
                </div>
                <h1>"{props.name}"</h1>
                <hr className="profileCarouselHR"/>
                
                <div className="profileCarouselText">{props.text}</div>
                <hr className="profileCarouselHR"/>
                <div className="profileCarouselStatus">{props.status}</div>
                <hr className="profileCarouselHR"/>
                <div className="profileCarouselLinkDiv">
                    <a target="__blank" href={props.twitter} id="noleftmargin" className="profileCarouselLinkItem"><i className="fab fa-twitter"></i></a>
                    <span className="dot"></span>
                    <a target="__blank" href={props.youtube} className="profileCarouselLinkItem"><i className="fab fa-youtube"></i></a>
                    <span className="dot"></span>
                    <a target="__blank" href={props.instagram} className="profileCarouselLinkItem"><i className="fab fa-instagram"></i></a>
                    <span className="dot"></span>
                    <a target="__blank" href={props.mail}  className="profileCarouselLinkItem"><i className="fas fa-at"></i></a>
                </div>
                
            </div>
            
 
        
    )
}


export default ProfilesCarousel;