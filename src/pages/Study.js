import '../App.css';
import Navbar from "../components/Navbar.js";
import Timer from "../components/Timer.js";
import PlayButton from '../components/PlayButton';
import PauseButton from '../components/PauseButton';

export default function Study() {
    return (
      <div className = "findspot-container"> 
          <Navbar />
          <Timer />
          <div className = "study-buttons-container">
            <PlayButton />
            <PauseButton />
          </div>
      </div>
    );
  }
  