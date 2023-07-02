import '../App.css';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import WalkButton from '../components/WalkButton';
import RestartButton from '../components/RestartButton';
import locationData from './locationData';

export default function FindSpot() {
    const locationsArray = locationData.studySpots;
    const defaultNum = Math.floor(Math.random() * locationsArray.length);

    const [id, setId] = useState(defaultNum);
    
    function generate() {
      window.location.pathname = "/loading";
    }

    return (
      <>
        <Navbar />
        <div className = "findspot-container">
            <img className = "image-container" src = {require("../images/img" + id + ".png")}></img>
            <div className = "text-container">
                <h1 className = "location-name">{locationsArray[id].name}</h1>
                <p className = "location-blurb">{locationsArray[id].blurb}</p>
                <div className = "walk-buttons-container">
                    <RestartButton onClick = {generate} className = "study-button walk-icon"/>
                    <a href = "/walking">
                      <WalkButton />
                    </a>
                </div>
            </div>
        </div>
      </>
      
    );
  }
  