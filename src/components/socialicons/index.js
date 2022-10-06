import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram, 
  FaDribbble,
  FaFigma,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
         {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.dribbble && (
          <li>
            <a href={socialprofils.dribbble}>
              <FaDribbble />
            </a>
          </li>
        )}
        {socialprofils.figma && (
          <li>
            <a href={socialprofils.figma}>
              <FaFigma />
            </a>
          </li>
        )}
        
      </ul>
      <p>Say Hi!</p>
    </div>
  );
};
