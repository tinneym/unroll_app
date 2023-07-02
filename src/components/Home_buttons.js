import laptop from "../images/laptop.png"
import map from "../images/map.png"

export default function HomeButtons() {
    return (
        <div className = "home-buttons-container">
            <a href="/study" className = "button1 home-button purple-back">
                <img src = {laptop} className = "laptop-img"/>
                <h1 className = "buttontext1">Start study session</h1>
            </a>
            <a href="/loading" className = "home-button white-back">
                <img src = {map} className = "map-img"/>
                <h1 className = "buttontext1">Generate study spot</h1>
            </a>
        </div>
        
        
    )
}