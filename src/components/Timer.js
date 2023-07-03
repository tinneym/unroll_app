export default function Timer(props) {
    return (
        <>
            <h1 className = {props.paused? "time time-paused xs-time" : "time time-play xs-time"}>
                <label>
                    {props.hours}:{props.minutes}:{props.seconds}
                </label>
            </h1>
        </>
    )
}