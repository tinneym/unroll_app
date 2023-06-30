import { useContext } from 'react';
import {TimeContext} from '../components/TimeContext';

export default function Timer() {
    const minutes = useContext(TimeContext);
    return (
        <>
            <h1 className = "time">
                <label>
                    {minutes}:00
                </label>
            </h1>
        </>
    )
}