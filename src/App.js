import logo from './logo.svg';
import './App.css';
import MainDataService from './MainDataService.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  // function onDelete (id){
  //   alert('delete '+ id)
  // }
  return (
    <Router>
      <div className="App">
        <div className="up-button"><a className="text-reset text-decoration-none" href="#">Up</a></div>
        <header className="App-header mb-3">
        <Link to="/" ><img src={logo} className="App-logo" alt="logo" /></Link>
          <div className="align-self-center shadow bg-dark rounded py-1 px-2 border border-danger">
            <h1><Link to='/breaking-bad' className="bb">Breaking Bad</Link></h1>
          </div>
        </header>
        <Routes>
          <Route path="/breaking-bad" element={<MainDataService/>}/>
        </Routes>
        
        {/* <MainDataService/> */}
      </div>
    </Router>
  );
}

export default App;
