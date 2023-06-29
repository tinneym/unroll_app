import '../App.css';
import Navbar from "../components/Navbar.js";
import Timer from "../components/Timer.js";
import PlayButton from '../components/PlayButton';
import PauseButton from '../components/PauseButton';
import SetTimeButton from '../components/SetTimeButton';
import SetTimePage from '../components/SetTimePage';

export default function Study() {
    return (
        <div>
            <Navbar />
            <div className = "study-page-container"> 
                <Timer />
                <div className = "study-buttons-container">
                    <PlayButton />
                    <SetTimeButton />
                    <PauseButton />
                </div>
            </div>
        </div>
    );
  }
  