import { createContext, useState } from "react";

export const TimeContext = createContext(60);

export const TimeProvider = ({children}) => {
    return (
        <TimeContext.Provider value = {60}>
            {children}
        </TimeContext.Provider>
    )
}
