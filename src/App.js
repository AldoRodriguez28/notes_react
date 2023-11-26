
import { useState, useEffect } from 'react';
import './App.css';
import Notes from './components/Notes';
import serviceNotes from './services/notes'
import FormNote from './components/FormNote';


function App() {
 const[notes , setNotes]= useState([]);
 const [newNote, setNewNote] = useState([])


   useEffect(()=>{
     serviceNotes
     .getAllNotes()
     .then(initialNotes =>{
       setNotes(initialNotes)
     })
   }, [])
   const handleSubmit = (event)=>{
    event.preventDefault();
    debugger;
    const newObject = {
        content: newNote,
        important: false
    }
     serviceNotes
     .createNote(newObject)
     .then((data)=> {
      setNotes(notes.concat(data))
     }).catch(e =>{console.error(e)})
    //setNotes(notes.concat(newObject))
}
const handleChange=(event)=>{
  setNewNote(event.target.value)

}
 return (
    <>
     <ol>
     {notes.map((note, i)=> {
        return  <Notes key={i}  note={note} />
    })}
   </ol>
   <form onSubmit={handleSubmit}>
        <div>
            <input onChange={handleChange} type="text" />
            <button type="">Guardar</button>
        </div>
    </form>
    </>
 );
}

export default App;
//
//In this code, we have a functional component `App` that renders the `Notes` component. The `notes` array contains the initial data for the notes.
//
//The commented-out code was used to fetch the notes data from an external service. It has been replaced with a static `notes` array for simplicity.
//
//The `useEffect` hook was used to fetch the notes data when the component mounts. This hook has been removed since we are now using a static `notes` array.
//
//The `useState` hook was used to manage the state of the notes data. This hook has been removed since we are now using a static `notes` array.
//
//The `Notes` component is used to display the notes data. It receives the `notes` array as a prop..</s>