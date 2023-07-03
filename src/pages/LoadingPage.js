import { PuffLoader } from "react-spinners";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/findSpot");
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