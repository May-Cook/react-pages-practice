import { useState } from "react"

export default function RandomNumberGenerator(){
    const [num, SetNum] = useState("");
    return(
        <div className="random-number-generator">
            <h4>Random Number Generator</h4>
            <input type="range" id="number-range" name="Range" min="0" max="100"/>
            <label for="number-range">Max Value</label>
            <p>Your number is: {num}</p>
            <div><button onClick={()=> SetNum(58)}>Generate</button></div>
        </div>
    )
}
