import React from 'react';
import "./SwipeButton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import PetsIcon from '@material-ui/icons/Pets';
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";



function SwipeButton() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat swipeButtons__size">
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className="swipeButtons__left swipeButtons__size">
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className="swipeButtons__star swipeButtons__size">
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className="swipeButtons__right swipeButtons__size">
                <PetsIcon fontSize='large' />
            </IconButton>
            <IconButton className="swipeButtons__lightning swipeButtons__size">
                <FlashOnIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButton
