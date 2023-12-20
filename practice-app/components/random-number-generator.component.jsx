import { useState } from "react"

export default function RandomNumberGenerator(){
    const [num, SetNum] = useState("");
    const [maxNum, SetMax] = useState(10);
    const [minNum, SetMin] = useState(1);
    return(
        <div className="random-number-generator">
            <h4>Random Number Generator</h4>
            <div className="slider-container">
            <div>
                <input type="range" className="slider" id="max-num" name="Range" min={minNum} max="100" value={maxNum} onChange={(e) => SetMax(+e.target.value)}/>
                <label for="max-num">Max Value: {maxNum}</label>
            </div>
            <div>
                <input type="range" className="slider" id="min-num" name="Range" min="1" max={maxNum} value={minNum} onChange={(e) => SetMin(+e.target.value)}/>
                <label for="min-num">Min Value: {minNum}</label>
            </div>
            </div>
            <p>Your number is: {num}</p>
            <div><button onClick={()=> SetNum(Math.floor((Math.random() * ((maxNum+1) - minNum)) + minNum))}>Generate</button></div> {/* Button sets num to a random integer from minNum to maxNum */}
        </div>
    )
}
