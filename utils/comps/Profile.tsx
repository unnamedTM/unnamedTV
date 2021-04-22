import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react'
import {YoutubeLink, InstaLink, TwitterLink, TwitchLink, GithubLink} from './SocialLinks' 
import profile from "../../styles/Profiles.module.css";


const Profile = (props) => {
    return (
      <Card className={profile.profileSize}>
        <div className={profile.imgProfile}>
          <img
            src={props.img}
            style={{ marginTop: props.marginTop, height: props.height }}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          {props.position ? (
            <>
              <hr />
              <Card.Body className={profile.positionBody}>
                {props.position}
              </Card.Body>
              <hr />
            </>
          ) : (
            <hr />
          )}
          <Card.Body className={profile.cardBody}>
            {props.youtube ? <YoutubeLink link={props.youtube} /> : null}
            {props.twitter ? <TwitterLink link={props.twitter} /> : null}
            {props.github ? <GithubLink link={props.github} /> : null}
            {props.twitch ? <TwitchLink link={props.twitch} /> : null}
            {props.insta ? <InstaLink link={props.insta} /> : null}
          </Card.Body>
        </Card.Body>
      </Card>
    );
}

export default Profile