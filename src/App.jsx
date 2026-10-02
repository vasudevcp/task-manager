import {useState} from 'react'
function App(){
    const[task,setTask]=useState("")
    const[todo,setTodo]=useState([])
    const[priority,setPriority]=useState("Medium")

    let add=(()=>{
        if(task.trim()==="")return

        setTodo([...todo,{
            name:task,
            priority:priority,
            completed:false
        }])
        setTask("")
        setPriority("Medium")

    })

    let deleteTask=((index)=>{
        setTodo(todo.filter((_,i)=>{
            return i!==index
        }))
    })
    return(
        <>
        <h1>task manager</h1>
        <input 
        type="text" 
        placeholder='task name'
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        />
        <select 
        value={priority}
        onChange={(e)=>setPriority(e.target.value)}
        >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
        <button onClick={add}>add</button>
        <ul>
            {todo.map((item,index)=>{
                return (
                    <li key={index}>
                        {item.name} - {item.priority}
                        <span>
                            {item.completed?"completed":"pending"}
                        </span>
                        {!item.completed &&(
                            <button>
                                Complete
                            </button>
                        )}
                    <button onClick={()=>{
                        deleteTask(index)
                    }
                    }>delete</button>
                    </li>
                )
            })}
        </ul>
        </>
    )
}
export default App