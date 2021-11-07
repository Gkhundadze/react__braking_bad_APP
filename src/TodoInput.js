import { useState } from "react"

export default function TodoInput (){
    let [val, setValue] = useState('');
function change(e){
setValue(e.target.value)
  
}
    return (
        <form>
            <input type='text' onChange={change} value={val}></input>
            <button>add task</button>
        </form>
    )
}