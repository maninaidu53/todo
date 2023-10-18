
import React,{useEffect} from 'react'
import { v4 as uuidv4} from 'uuid'
import axios from 'axios'


const Form = ({input,setInput,todos,setTodos,editTodo,setEditTodo}) => {
    const updateTodo=(title,id,completed)=>{
        const newTodo=todos.map((todo)=>
            todo.id===id  ? {title,id,completed} : todo 
        );
        setTodos(newTodo);
        setEditTodo("");
       
        
    }
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
        .then(user=>setTodos(user.data))
        .catch(err=>console.log(err))
    },[])
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("")
        }
    },[setInput,editTodo])
    const onInputChange=e=>{
        setInput(e.target.value)
    }
    const onFormSubmit=e=>{
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos,{id: uuidv4(),title:input,completed:false}])
            setInput("");
        }else{
            updateTodo(input,editTodo.id,editTodo.completed)
        }
        
    }
  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder='Enter the text...' className='task-input' value={input} required onChange={onInputChange}/>
            <button className='button-add' type='submit'>{editTodo ? 'OK':'Add'}</button>
        </form>
    </div>
  )
}

export default Form