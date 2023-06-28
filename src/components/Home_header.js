import logo from "../images/logo.png"

export default function HomeHeader() {
    return (
        <div className = "home-title">
            <div className = "logo-container">
                <div className = "logo-inner-container">
                    <img src = {logo} className = "logo-img"/>
                    <h1 className = "logo-title">UNROLL</h1>
                </div> 
            </div>
            <div>
                <h2 className = "slogan">Study, change spots, repeat -
                                keep yourself on a roll while letting
                                your brain unwind!</h2>
            </div>
           
        </div>
        
    )
}