import { useContext, useState } from "react";
import { TimeContext } from "./TimeContext";

export default function SelectButtons(props) {   
    function changeTime() {
        props.setTime(props.time);
    }

    function changeSeconds() {
        props.setSecondsLeft(props.time * 60);
        
    }

    return (
        <button 
        onClick = {() => {
            changeTime();
            changeSeconds();
        }}
        className = "selection-button">{props.time} </button>
    )
}
