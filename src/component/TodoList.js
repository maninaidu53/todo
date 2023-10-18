import React from 'react'

const TodoList = ({todos,setTodos,setEditTodo}) => {
    
    const handleEdit=({id})=>{
        const findTodo=todos.find((todo)=>todo.id===id)
        console.log(findTodo)
        setEditTodo(findTodo)
    }
    const handleComplete=id=>{
        setTodos(
            todos.map(item=>{
                if(item.id===id){
                    return {...item,completed:!item.completed}
                }
                return item;
                
            })
            
            
        )
    }
    const deleteHandler=id=>{
        const deleteItem=todos.filter(todo=>todo.id!==id)
        setTodos(deleteItem)
    }
  return (
    <div>
        {todos.map((todo)=>(
            <li className='list-item' key={todo.id}>
                <input type='text' value={todo.title} className='list' onChange={(event)=>event.preventDefault()}/>
                <div>
                    <input type="checkbox" className='checkbox-style' checked={todo.completed} onClick={()=> handleComplete(todo.id)}/>
                    <button className='btn btn-info button-edit' onClick={()=>handleEdit(todo)}>
                        edit
                        
                    </button>
                    <button className='btn btn-danger button-delete' onClick={()=>deleteHandler(todo.id)} >
                        delete
                    </button>
                    
                    </div>
                  
            </li>
            
        )
        )}
    </div>
  )
}

export default TodoList