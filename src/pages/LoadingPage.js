import { PuffLoader } from "react-spinners";
import { useEffect } from "react";

export default function LoadingPage() {

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.pathname = "/findSpot";
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className = "loading">
            <PuffLoader size = "100" color = "white"/>       
            <p>Finding study spot...</p>
        </div>
    )
}