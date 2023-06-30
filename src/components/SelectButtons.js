import { useContext, useState } from "react";
import { TimeContext } from "./TimeContext";

export default function SelectButtons(props) {   
    return (
        <button onClick = {() => props.setTime(props.time)} className = "selection-button">{props.time}</button>
    )
}