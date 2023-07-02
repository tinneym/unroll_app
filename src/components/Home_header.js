import logo from "../images/logo.png"

export default function HomeHeader() {
    return (
        <div className = "home-title xs-home-title">
            <div className = "logo-container small-logo-container xs-logo-container">
                <div className = "logo-inner-container xs-inner">
                    <img src = {logo} className = "logo-img small-logo xs-logo"/>
                    <h1 className = "logo-title small-title xs-title">UNROLL</h1>
                </div> 
            </div>
            <h2 className = "slogan small-slogan xs-slogan">Study, change spots, repeat -
                            keep yourself on a roll while letting
                            your brain unwind!</h2>
        </div>
        
    )
}