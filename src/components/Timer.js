import { useContext } from 'react';
import {TimeContext} from '../components/TimeContext';

export default function Timer(props) {
    return (
        <>
            <h1 className = "time">
                <label>
                    {props.minutes}:00
                </label>
            </h1>
        </>
    )
}