import React from 'react';
import "./swipebuttons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";

function Swipebutton() {
  return (
    <div className="swipebutton">
      <IconButton className="repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="star">
        <StarIcon fontSize="large" />
      </IconButton>
      <IconButton className="favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Swipebutton