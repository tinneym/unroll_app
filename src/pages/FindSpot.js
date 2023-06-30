import '../App.css';
import Navbar from '../components/Navbar';
import firestone from "../images/firestone.png";
import WalkButton from '../components/WalkButton';
import RestartButton from '../components/RestartButton';

export default function FindSpot() {
    return (
      <>
        <Navbar />
        <div className = "findspot-container">
            <img className = "image-container" src = {firestone}></img>
            <div className = "text-container">
                <h1 className = "location-name">FIRESTONE LIBRARY</h1>
                <p className = "location-blurb">A classic... take the trek up to the top floor or hole up in the basement for the grind!</p>
                <div className = "walk-buttons-container">
                    <RestartButton className = "study-button walk-icon"/>
                    <a href = "/study">
                      <WalkButton />
                    </a>
                </div>
            </div>
        </div>
      </>
      
    );
  }
  