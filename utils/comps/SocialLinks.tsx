import Link from "next/link";
import React from "react";


import { FiTwitter, FiYoutube, FiInstagram, FiTwitch, FiGithub } from "react-icons/fi";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";



const YoutubeLink = (props) => {
 

  return(
    <a href={`https://youtube.com/channel/${props.link}`}>
        <FiYoutube/>
    </a>
    );
};

const InstaLink = (props) => {
  return (
    <a href={`https://instagram.com/${props.link}`}>
      <FiInstagram />
    </a>
  );
};

const TwitterLink = (props) => {
  return <a href={`https://twitter.com/${props.link}`}><FiTwitter/></a>;
};

const TwitchLink = (props) => {
  return <a href={`https://twitch.tv/${props.link}`}><FiTwitch/></a>;
};

const GithubLink = (props) => {
  return <a href={`https://github.com/${props.link}`}><FiGithub/></a>;
}

export  {
  YoutubeLink,
  InstaLink,
  TwitterLink,
  TwitchLink,
  GithubLink,
};
