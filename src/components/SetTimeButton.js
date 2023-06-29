export default function SetTimeButton(props) {
    // function handleChange(event) {
        
    // }
    return (
        <a href = "/study/settings">
            <button  className = "set-time-button" {...props}> - Set Time - </button>
        </a>
        // <select 
        //     id = "time"
        //     value = "default"
        //     onChange = {handleChange}
        //     name = "setting-time"
        // >
        //     <option value = "default">- Set Time -</option>
        //     <option value = "30">30</option>
        //     <option value = "45">45</option>
        //     <option value = "60">60</option>
        //     <option value = "75">75</option>
        //     <option value = "90">90</option>
        //     <option value = "105">105</option>
        //     <option value = "120">120</option>
        // </select>
    )
}