import laptop from "../images/laptop.png"
import map from "../images/map.png"

export default function HomeButtons() {
    return (
        <div className = "home-buttons-container xs-home-buttons-container">
            <a href="/study" className = "button1 home-button purple-back small-button xs-button">
                <img src = {laptop} className = "laptop-img"/>
                <h1 className = "buttontext1 small-text xs-small-text">Start study session</h1>
            </a>
            <a href="/loading" className = "home-button white-back small-button xs-button">
                <img src = {map} className = "map-img"/>
                <h1 className = "buttontext1 small-text xs-small-text">Generate study spot</h1>
            </a>
        </div>
        
        
    )
}