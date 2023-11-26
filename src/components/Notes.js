import React from 'react'

export default function Notes(props) {
    const note = props.note

  return (
   <>
   <li key={note.id}>{note.content}</li>
   </>
  )
}
