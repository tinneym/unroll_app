import { useState } from 'react';

export default function Timer(props) {
    return (
        <>
            <h1 className = {props.paused? "time time-paused" : "time time-play"}>
                <label>
                    {props.hours}:{props.minutes}:{props.seconds}
                </label>
            </h1>
        </>
    )
}