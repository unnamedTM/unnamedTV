import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiTwitch,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const YoutubeLink = (props) => {
  return (
    <a href={`/${props.link}/youtube`}>
      <FiYoutube />
    </a>
  );
};

const InstaLink = (props) => {
  return (
    <a href={`/${props.link}/instagram`}>
      <FiInstagram />
    </a>
  );
};

const TwitterLink = (props) => {
  return (
    <a href={`/${props.link}/twitter`}>
      <FiTwitter />
    </a>
  );
};

const TwitchLink = (props) => {
  return (
    <a href={`/${props.link}/twitch`}>
      <FiTwitch />
    </a>
  );
};

const GithubLink = (props) => {
  return (
    <a href={`/${props.link}/github`}>
      <FiGithub />
    </a>
  );
};

export { YoutubeLink, InstaLink, TwitterLink, TwitchLink, GithubLink };
