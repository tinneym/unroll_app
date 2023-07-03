import { ClimbingBoxLoader } from "react-spinners";
import { useEffect } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function WalkingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/study");
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className = "loading walking">
            <ClimbingBoxLoader size = "18" color = "white"/>       
            <p>Walking...</p>
        </div>
    )
}