import { useState } from "react";

export default function Counter(props){
    let [count, setCount] = useState(0);
    function increment (){
        setCount(count+parseInt(props.inc))
    }

    function decrement (){
        setCount(count-parseInt(props.inc))
    }
    return (
        <div>
            <p>{count}</p>

            <button 
            onClick={increment}
            >&#x2B;
            </button>

            <button
            onClick = {decrement}
            >&minus;
            </button>

        </div>
    )
}