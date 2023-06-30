import '../App.css';
import Navbar from "../components/Navbar.js";
import Timer from "../components/Timer.js";
import PlayButton from '../components/PlayButton';
import PauseButton from '../components/PauseButton';
import SetTimeButton from '../components/SetTimeButton';
import SetTimePage from '../components/SetTimePage';
import SelectButtons from '../components/SelectButtons';
import { useState } from 'react';

export default function Study() {
    const [showSettings, setShowSettings] = useState(true);
    const [time, setTime] = useState(60);

    function toggleSettings() {
        setShowSettings(!showSettings);
    }

    return (
        <div>
            <Navbar />
            {showSettings && 
                <div className = "settings-container">
                Select Study Session Duration:
                <div className = "selection-container">
                    <SelectButtons time = "30" setTime = {setTime} />
                    <SelectButtons time = "45" setTime = {setTime} />
                    <SelectButtons time = "60" setTime = {setTime} />
                    <SelectButtons time = "75" setTime = {setTime} />
                    <SelectButtons time = "90" setTime = {setTime} />
                    <SelectButtons time = "105" setTime = {setTime} />
                    <SelectButtons time = "120" setTime = {setTime} />
                </div>
                    <button onClick = {toggleSettings} className = "study-button back">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </button>
        </div>}
            {!showSettings && <Timer minutes = {time}/>}
            {!showSettings && 
            <div className = "study-page-container"> 
                <div className = "study-buttons-container">
                    <PlayButton />
                    <SetTimeButton onClick = {toggleSettings}/>
                    <PauseButton />
                </div> 
            </div>}
        </div>
    );
  }
  