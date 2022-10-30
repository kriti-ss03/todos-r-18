import React from 'react';
import  { useState } from 'react';

export default function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Descp not given");

        }else
            props.addTodo(title, desc);
            //reseting it to blank
            setTitle("");
            setDesc("");
    }
//change by setTitle arrow mthd-onChange={(e)=>setDesc(e.target.value) }
   
    return (
        <div className='container my-3'>
            <h3 className='text-center'>Add Todo item</h3>
 <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value) } id="title" aria-describedby="emailHelp"/>
      </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo desc</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value) } id="desc"/>
  </div>
 
  <button type="submit" className="btn btn-sm btn-dark">Submit</button>
            </form>
            </div>
  )
}
