function Todo (props){
    return (
        <div className="d-flex">
            <input type="checkbox" checked = {props.checked}/>
            <p>{props.text}</p>
            <button 
            onClick = {() => {
                props.onDelete(props.id)
            }}>
                &times;
            </button>
        </div>
    )
}

export default Todo;