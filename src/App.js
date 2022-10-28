
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer"; //since export as const
import React, { useState } from 'react';
import AddTodo from "./MyComponents/AddTodo";


function App() {
  const onDeletefun = (todo => {
    console.log("delete is pressed", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todosarr.filter((e) => {
      // here we are filtering - the idea is remove an item from the todo array on a button click
      // return the rest of the todos that don't match the item we are deleting
      
      return e !== todo;
    }));
    //console.log("deleted", todosarr)
    //localStorage.setItem("todosarr", JSON.stringify(todosarr));
  });


 const [todosarr,setTodos]=useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market"
    },
    {
      sno: 2,
      title: "Go to the mall", 
      desc: "You need to go to the mall"
    }
  ]);

  const addTodo = (t,d) => {
  
    console.log(t, d);
    let sn;
    if (todosarr.length === 0) sn = 0;
    else {
      sn = todosarr[todosarr.length - 1].sno + 1;
    }
      const newtodo = {
     sno:sn,
      title:t,
      desc:d
    }
    //appending newTodo after todosarr ELEMENTS by using SPREAD OPERATOR OF ES6
      setTodos([...todosarr, newtodo]);
    console.log(newtodo);
  }

  
  return (
    <div>
      <Header title="TodosList" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todosarr} onDelete={onDeletefun}/>
      <Footer/>
    </div>
    
  );
}

export default App;
