import Card from './Card'
import React, {useState} from 'react'
import './App.css';





function App() {

const db = [
    { id: 1, name: 'Bob', state: 'CA', salary: 3500, height: 158, group: 1},
    { id: 2, name: 'Alice', state: 'AK', salary: 2900, height: 153, group: 1},
    { id: 3, name: 'Billy', state: 'NC', salary: 2600, height: 167, group: 2},
    { id: 4, name: 'Donnie', state: 'NY', salary: 4110, height: 196, group: 3},
    { id: 5, name: 'Jnnionnie', state: 'OG', salary: 5300, height: 159, group: 4},
    { id: 6, name: 'Bobnni', state: 'OK', salary: 3500, height: 158, group: 2},
    { id: 7, name: 'Alicnnie', state: 'ML', salary: 2900, height: 153, group: 3},
    { id: 8, name: 'Billnniy', state: 'WT', salary: 2600, height: 167, group: 4},
    { id: 9, name: 'Donnnniie', state: 'DC', salary: 4110, height: 196, group: 1},
    { id: 10, name: 'Jonnienni', state: 'GE', salary: 5300, height: 159, group: 2},
];

const groups = [1, 2, 3, 4];
const [newDb, setNewDb] = useState(db);

const moveCard = (index, value) => {
    const newArr = newDb.map(el =>{
        if (el.id === index){
        el.group = el.group + value
    }
return el

    });
    setNewDb(newArr)

}


  return (
    <div className='container'>
        <div className='row'>

            <div className='card-deck' >
                {groups.map(el => <th><Card moveCard={moveCard} el={el} db={newDb} /></th>)}

            </div>
        </div>
    </div>
  );
}

export default App;
