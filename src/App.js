import logo from './logo.svg';
import './App.css';
import MainDataService from './MainDataService.js';

// const arr = [
// {id: 1, text: 'lorem 1', completed: true},
// {id: 2, text: 'lorem 2', completed: false},
// {id: 3, text: 'lorem 3', completed: true},
// {id: 4, text: 'lorem 4', completed: true},
// {id: 5, text: 'lorem 5', completed: true},
// {id: 6, text: 'lorem 6', completed: true},
// {id: 7, text: 'lorem 7', completed: true},
// {id: 8, text: 'lorem 8', completed: true},
// {id: 9, text: 'lorem 9', completed: false},
// {id: 10, text: 'lorem 10', completed: true},
// ];





function App() {
  // function onDelete (id){
  //   alert('delete '+ id)
  // }
  return (
    <div className="App">
      <div className="up-button"><a className="text-reset text-decoration-none" href="#">Up</a></div>
      <header className="App-header mb-3">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="align-self-center shadow bg-dark rounded py-1 px-2 border border-danger">
          <h1>Breaking Bad</h1>
        </div>
      </header>
      <MainDataService/>
      {/* <Counter inc="1"/> */}
      {/* <Counter inc="2"/> */}
      {/* <Counter inc="4"/> */}
      {/* <Counter inc="6"/> */}
      {/* <TodoInput/> */}
    {/* {
      
      arr.map(obj => <Todo 
        key={obj.id} 
        onDelete = {onDelete} 
        btnText={obj.text} 
        id={obj.id} 
        checked = {obj.completed} 
        text = {obj.text}/>)
    } */}
    </div>
  );
}

export default App;
