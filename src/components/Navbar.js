import home from "../images/home.png"

export default function Navbar() {
    return (
        <div>
        <a href = "/">
            <img src = {home} className = "home-img xs-nav"/>
        </a>
        </div>
    )
}