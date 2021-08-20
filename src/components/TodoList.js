import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos,setTodos]=useState([]);

    const addTodo=todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos=[todo,...todos];
        setTodos(newTodos);
    }

    const removeTodo=id=>{
        const removeArr=[...todos].filter(todo=>todo.id !==id);
        setTodos(removeArr);
    }

    const updateTodo=(todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev=>prev.map(item=>(item.id===todoId ? newValue : item)));
    }

    const completeTodo=id=>{
        let updatedTodos=todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    }
    today = dd+'/'+mm+'/'+yyyy;
    return (
        <div className='mainDiv'>
            <p><h1>What's the plan for today?</h1><h2>( {today} )</h2></p>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList
