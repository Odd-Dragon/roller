import {useState} from "react";

function SetDie (props) {
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const rollPressed = () => {
        props.callback({ quantity: quantity, size: size });
    }

    return (
        <div>
            <form>
                {/*The next two lines are currently irrelevant, 
                but included for later functionality.*/}
                <p>How many dice would you like to roll?</p>
                <input id="quantity-field" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <div></div>
                <p>What size die would you like to roll?</p>
                <input type="radio" id="d4" name="die-size" value={size} onClick={(e) => setSize(4)}></input>
                <label htmlfor="d4">D4</label>
                <input type="radio" id="d6" name="die-size" value={size} onClick={(e) => setSize(6)}></input>
                <label htmlfor="d6">D6</label>
                <input type="radio" id="d8" name="die-size" value={size} onClick={(e) => setSize(8)}></input>
                <label htmlfor="d8">D8</label>
                <input type="radio" id="d10" name="die-size" value={size} onClick={(e) => setSize(10)}></input>
                <label htmlfor="d10">D10</label>
                <input type="radio" id="d12" name="die-size" value={size} onClick={(e) => setSize(12)}></input>
                <label htmlfor="d12">D12</label>
                <input type="radio" id="d20" name="die-size" value={size} onClick={(e) => setSize(20)}></input>
                <label htmlfor="d20">D20</label>
                <input type="radio" id="d100" name="die-size" value={size} onClick={(e) => setSize(100)}></input>
                <label htmlfor="d100">D100</label>
                <p>Rolling {quantity} {size}-sided dice.</p> 
                <button type="button" onClick={rollPressed}>Roll!</button>
                <button>Reset</button>
            </form>
        </div>
    )
}

export default SetDie;