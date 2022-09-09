import React from 'react';

export default function NotesInner({ Notes, Delete, Edit, ReadMore, totalDesc }) {
  return (
    <>
      <div className='container my-2 d-flex justify-content-start flex-wrap'>
        {/* Check Some Conditions */}
        {Notes.length > 0 ?

          // Using Map Method To display all the array Value in UI
          Notes.map((elem, index) => {
            return <div className="card mx-2 my-2 text-white" style={{ height: '200px', width: '350px', backgroundColor: '#011023', border: '2px solid #ffffff70' }} key={index}>
              <div className="card-body">
                <h5 className="card-title text-bold">{elem.title < 30 ? elem.title : elem.title.slice(0, 30)}<p className='d-inline-flex float-end'><i className="fa-sharp fa-solid fa-trash  mx-3 text-danger" style={{ cursor: 'pointer' }} onClick={() => { Delete(index) }}></i><i className="fa-solid fa-pen-to-square text-warning" style={{ cursor: 'pointer' }} onClick={() => { Edit(index) }}></i></p></h5>
                <hr />
                <p className="card-text">
                  {/* Check Some Conditions */}
                  {
                    elem.desc < 70 ? elem.desc : elem.desc.slice(0, 70)
                  }
                  <br />
                  {/* Check Some Conditions */}
                  {elem.desc.length > 70 ? <button type="button" className="btn btn-sm position-absolute bottom-0 end-0 btn-primary text-white my-2 mx-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { ReadMore(index) }} >Read More&nbsp;<i className='fa fa-arrow-alt-circle-up'></i></button> : ''}
                </p>
              </div>
            </div>
          }) : <h4 className='text-white mt-3'>Please Add Some Notes!</h4>}

        {/* Click To ReadMore Button To Display */}
        {totalDesc}

      </div>
    </>
  )
}
