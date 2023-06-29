export default function Timer() {
    const minutes = 45;
    return (
        <>
            <h1 className = "time">
                <label>
                    {minutes}:00
                </label>
            </h1>
        </>
    )
}