import Navbar from "./Navbar";
import SelectButtons from "./SelectButtons";

export default function SetTimePage() {
    return (
        <>
        <Navbar />
            <div className = "settings-container">
                Select Study Session Duration:
                <div className = "selection-container">
                    <SelectButtons time = "30"/>
                    <SelectButtons time = "45"/>
                    <SelectButtons time = "60"/>
                    <SelectButtons time = "75"/>
                    <SelectButtons time = "90"/>
                    <SelectButtons time = "105"/>
                    <SelectButtons time = "120"/>
                </div>
                <button className = "study-button back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </button>
            </div>
        </>
        
    )
}