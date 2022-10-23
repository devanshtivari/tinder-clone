import React from 'react';
import "./header.css"
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>
      <img
        className="tinder-logo"
        src="https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo-253x300.png"
        alt="tinder-logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header-icon"/>
      </IconButton>
    </div>
  );
}

export default Header