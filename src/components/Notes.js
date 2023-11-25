import React from 'react'

export default function Notes(props) {
    const notes = props.notes

  return (
   <>
   <ol>
    {notes.map(note => {
        return <li>{note.content}</li>
    })}
   </ol>
   </>
  )
}
