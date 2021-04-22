
import React from "react";


import { FiTwitter, FiYoutube, FiInstagram, FiTwitch, FiGithub } from "react-icons/fi";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";



const YoutubeLink = (props) => {
 

  return(
    <a href={`/members/${props.link}/youtube`}>
        <FiYoutube/>
    </a>
    );
};

const InstaLink = (props) => {
  return (
    <a href={`/members/${props.link}/instagram`}>
      <FiInstagram />
    </a>
  );
};

const TwitterLink = (props) => {
  return (
    <a href={`/members/${props.link}/twitter`}>
      <FiTwitter />
    </a>
  );
};

const TwitchLink = (props) => {
  return (
    <a href={`/members/${props.link}/twitch`}>
      <FiTwitch />
    </a>
  );
};

const GithubLink = (props) => {
  return (
    <a href={`/members/${props.link}/github`}>
      <FiGithub />
    </a>
  );
}

export  {
  YoutubeLink,
  InstaLink,
  TwitterLink,
  TwitchLink,
  GithubLink,
};
