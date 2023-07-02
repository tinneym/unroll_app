import '../App.css';
import Navbar from "../components/Navbar.js";
import Timer from "../components/Timer.js";
import PlayButton from '../components/PlayButton';
import PauseButton from '../components/PauseButton';
import SetTimeButton from '../components/SetTimeButton';
import RestartButton from '../components/RestartButton';
import SelectButtons from '../components/SelectButtons';
import LoadingPage from './LoadingPage';
import { useEffect, useState} from 'react';

export default function Study() {
    const [showSettings, setShowSettings] = useState(false);
    const [time, setTime] = useState(60);
    const [isPaused, setIsPaused] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(time * 60);
    // const [isTimerActive, setIsTimerActive] = useState(false);

    const originalTime = time;

    // switches between displaying settings or timer
    function toggleSettings() {
        setShowSettings(!showSettings);
    }

    // switches between pause or play
    function togglePause() {
        setIsPaused(!isPaused);
    }

    // // switches timer color
    // function toggleTimerActive() {
    //     setIsTimerActive(!isTimerActive);
    // }

    function reset() {
        setSecondsLeft(originalTime * 60);
        setIsPaused(true);
    }

    // starts countdown
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setSecondsLeft(secondsLeft => secondsLeft - 1)
            }, 1000)

            if (secondsLeft === 0) {
                clearInterval(interval)
                setIsPaused(true);
                window.location.pathname = "/loading";
            }

            return () => clearInterval(interval);
        }
    }, [isPaused, secondsLeft]);

    // creates variables for time display
    let hours = Math.floor(secondsLeft / 3600);
    let minutes = Math.floor((secondsLeft % 3600) / 60);
    let seconds = secondsLeft % 60;
   
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return (
        <div>
            <Navbar />
            {showSettings && 
                <div className = "settings-container xs-settings">
                - Set Time -
                    <div className = "selection-container">
                        <SelectButtons time = "30" setTime = {setTime} setSecondsLeft = {setSecondsLeft}/>
                        <SelectButtons time = "45" setTime = {setTime} setSecondsLeft = {setSecondsLeft}/>
                        <SelectButtons time = "60" setTime = {setTime} setSecondsLeft = {setSecondsLeft}/>
                        <SelectButtons time = "75" setTime = {setTime} setSecondsLeft = {setSecondsLeft}/>
                        <SelectButtons time = "90" setTime = {setTime} setSecondsLeft = {setSecondsLeft}/>
                        <SelectButtons time = "105" setTime = {setTime} setSecondsLeft = {setSecondsLeft}/>
                        <SelectButtons time = "120" setTime = {setTime} setSecondsLeft = {setSecondsLeft}/>
                    </div>
                        <button onClick = {() => {toggleSettings(); reset();}} className = "study-button back">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                        </button>
        </div>}
            <div className = "timer-block">
                {!showSettings && <Timer paused = {isPaused} hours = {hours} minutes = {minutes} seconds = {seconds} />}
                {!showSettings && 
                <div className = "study-page-container"> 
                    <div className = "study-buttons-container xs-study-buttons">
                        <RestartButton onClick = {reset}/>
                        <SetTimeButton onClick = {toggleSettings}/>
                        {!isPaused 
                        ? <PauseButton onClick = {togglePause}/> 
                        : <PlayButton onClick = {togglePause}/>}
                    </div> 
                </div>}
            </div>
        </div>
    );
  }
  