import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem";
//../MyComponents/TodoItem"; or ./TodoItem

export default function Todos(props) {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length == 0 ? <p className="text-center">~Nothing to display~</p> :
        
        props.todos.map(item => {
          return (
            
              <TodoItem todoitem={item} onDelete={props.onDelete} key={item.sno} />
            );
        }
          )
        }
      
          
        
    </div>

  )
}
