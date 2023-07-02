import { ClimbingBoxLoader } from "react-spinners";
import { useEffect } from "react";

export default function WalkingPage() {

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.pathname = "/study";
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className = "loading">
            <ClimbingBoxLoader size = "20" color = "white"/>       
            <p>Walking...</p>
        </div>
    )
}