import React, { useState } from 'react';
import NotesInner from './NotesInner';

export default function Notes() {
  //Some Styling

  const style = {
    backgroundColor: '#263f58',
    border: 'none',
    outline: 'none',
    color: '#fff'
  }

  //Declare States

  let [title, setTitle] = useState('');
  let [desc, setDesc] = useState('');
  let [note, setNote] = useState('');
  let [msg, setMsg] = useState();
  let [btn, setBtn] = useState(`Add`);
  let [totalDesc, setTotalDesc] = useState();




  //()=> To Add Notes In UI

  const AddNotes = (title, desc) => {

    if (title.length > 0 && desc.length > 0) {
      let newObj = {
        title: title,
        desc: desc
      };

      // Adding All  Notes in Array
      setNote(obj => [...obj, newObj]);

      //Update Hook
      setBtn('Add');
      setTitle('');
      setDesc('');
    }
    else
     {
      //Update Hook
      setMsg(
        <div style={{ height: '100vh', width: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: '1', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <div className="modal-dialog " tabIndex="-1" >
            <div className="modal-body text-center text-white">
              <h2>Add Some Title & Description</h2>
            </div>
          </div>
        </div>);

        //Remove Error in 1s
      setTimeout(()=> {
        setMsg(null)
      }, 1000);
    }
  }
  //()=>To Delete a Note.
  const Deleted = (index) => {

    //Delete Specific index of Array
    note.splice(index, 1);

    //Update the Delete Hook
    setNote(obj => [...obj]);
  }

  // ()=>TO Edit a Note
  const Edit = (index) => {

    //Update Hooks an exisiting Value of Note = Input Value
    setTitle(note[index].title);
    setDesc(note[index].desc);

    //Update Hooks
    setNote(obj => [...obj]);

    //Specific Edit Note
    note.splice(index, 1);

    //Update Hook
    setBtn(`Update`)

  }
  //()=>TO Read More With PopUp Box Modal
  const readMore = (index) => {

    //Return a PopUp Box Modal UI && Extract All The Title and Description
    return setTotalDesc(<div style={{ backkgroundColor: '#333' }} className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{note[index].title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body" >
            {note[index].desc}
          </div>
        </div>
      </div>
    </div>)
  }
  return (
    <>
    {/* When Error is Come To Display Msg Box */}
      <div>{msg}</div>

       {/* Note Taking UI */}
      <h1 className='text-center text-white my-2'>Add A Note</h1>
      <div className='container'>
        <div className="mb-3">
          <h4 className="form-label text-white">Title</h4>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={title} onChange={(event) => {
            setTitle(event.currentTarget.value);
          }} name='title' style={style} />
        </div>
        <div className="mb-3">
          <h4 className="form-label text-white" >Description</h4>
          <textarea className="form-control w-900px h-200px" onChange={(event) => {
            setDesc(event.currentTarget.value);
          }} value={desc} style={style} name='desc'></textarea>
        </div>
        <button className="btn btn-danger" onClick={() => { AddNotes(title, desc) }}>{btn}&nbsp;<i className={`fa-solid fa-${btn === 'Add' ? 'plus' : 'pen-to-square'}`}></i></button>
      </div>
      <h1 className='text-center text-white my-2'>My Notes</h1>

      {/* All the Necessary Props are Given to Take Operations in Notes Element*/}
      <NotesInner Notes={note} Delete={Deleted} Edit={Edit} ReadMore={readMore} totalDesc={totalDesc} />

    </>
  )
}
