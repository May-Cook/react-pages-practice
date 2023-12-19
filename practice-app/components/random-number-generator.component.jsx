import { useState } from "react"

export default function RandomNumberGenerator(){
    const [num, SetNum] = useState("");
    const [maxNum, SetMax] = useState(10);
    return(
        <div className="random-number-generator">
            <h4>Random Number Generator</h4>
            <input type="range" id="number-range" name="Range" min="1" max="100" value={maxNum} onChange={(e) => SetMax(e.target.value)}/>
            <label for="number-range">Max Value: {maxNum}</label>
            <p>Your number is: {num}</p>
            <div><button onClick={()=> SetNum(Math.floor(Math.random() * maxNum) + 1)}>Generate</button></div> {/* Button sets num to a random integer from 1 to 100 */}
        </div>
    )
}
