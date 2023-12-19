
export default function RandomNumberGenerator(){
    return(
        <div className="random-number-generator">
            <h4>Random Number Generator</h4>
            <input type="range" id="number-range" name="Range" min="0" max="100"/>
            <label for="number-range">Max Value</label>
            <p>Your number is:</p>
            <div><button>Generate</button></div>
        </div>
    )
}
