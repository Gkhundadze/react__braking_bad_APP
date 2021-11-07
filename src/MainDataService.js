import axios from "axios";
import { useEffect, useState } from "react";



export default function MainDataService(){
    const [characters, setcharacters] = useState([])
useEffect (() => {
    axios.get('https://www.breakingbadapi.com/api/characters')
    .then(function (response) {
        // console.log(response);
        setcharacters(response.data)


    })
    .catch(error => {
        console.log(error);
    })
}, [])

// console.log(characters); 
const personList = []
for(let i = 0; i < characters.length; i++){
    const person = characters[i]
    personList.push(person)
    // console.log(person);
}
// console.log(personList);
    return (
        <div className="container">
          <div className= "d-flex justify-content-evenly flex-wrap">
          {
           personList.map((item) => {
               return (
                    <div key={item.char_id} className="card mb-3 bg-light">
                        <img src={item.img} className="card-img-top shadow" alt={item.name}/>
                        <div className="card-body">
                          <h5 className="card-title">{item.name}<sup>{item.nickname}</sup></h5>
                          <p className="btn btn-primary">ID : {item.char_id} </p>
                        </div>
                    </div>
               )
           })
            }
          </div>
        </div>
    )
}