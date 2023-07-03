import '../App.css';
import Navbar from '../components/Navbar';
import WalkButton from '../components/WalkButton';
import RestartButton from '../components/RestartButton';
import locationData from './locationData';

export default function FindSpot() {
    const locationsArray = locationData.studySpots;
    const id = Math.floor(Math.random() * locationsArray.length);
    
    function generate() {
      window.location.pathname = "/loading";
    }

    return (
      <>
        <Navbar />
        <div className = "findspot-container small-findspot xs-findspot">
            <img className = "image-container small-image-container xs-image-container" src = {require("../images/img" + id + ".png")}></img>
            <div className = "text-container small-text-container xs-container">
                <h1 className = "location-name xs-location-name">{locationsArray[id].name}</h1>
                <p className = "location-blurb xs-blurb">{locationsArray[id].blurb}</p>
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
  