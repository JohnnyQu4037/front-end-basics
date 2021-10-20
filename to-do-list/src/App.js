import { v4 as uuidv4 } from 'uuid';
import {useState,useRef} from "react"

const editMode = ()=>{console.log(0)}

const initialTasks = [
  {
    title: 'Clean up files',
    project: 'Office Chores',
    id: uuidv4(),
  },
  {
    title: 'Walk dog',
    project: 'Life Chores',
    id: uuidv4(),
  },
];

const task = (
  initialTasks.map((task)=>(
    <div key = {task.id} className='ui centered card'>
      <div className='content'>
        <div className='header'>
          {task.title}
        </div>
        <div className='meta'>
          {task.project}
        </div>
        <div className='extra content'>
          <span className='right floated edit icon'>
            <i className='edit icon' onClick = {editMode}/>
          </span>
          <span className='right floated trash icon'>
            <i className='trash icon' />
          </span>
        </div>
      </div>
    </div>
  ))
);

const TaskForm =(addable,setAddable,tasks,setTasks)=>{
  const titleRef = useRef()
  const projectRef = useRef()

  function taskHandler(event){
    const newTask = {
      title: 'Clean up files',
      project: 'Office Chores',
      id: uuidv4(),
    }
    tasks.push(newTask)
    setTasks(tasks)
  }

  return (
  <div className='ui centered card'>
    <div className='content'>
      <div className='ui form'>
        <div className='field'>
          <label>Title</label>
          <input type='text' ref = {titleRef}/>
        </div>
        <div className='field'>
          <label>Project</label>
          <input type='text' ref={projectRef}/>
        </div>
        <div className='ui two bottom attached buttons'>
          <button className='ui basic blue button' 
            onClick = {()=>{
              taskHandler()
              addableHandler(addable,setAddable)
            }}
          >
            Create
          </button>
          <button className='ui basic red button' 
            onClick = {()=>{
              addableHandler(addable,setAddable)}}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
);} 

const AddButton = (addable,setAddable)=>{
  return (
    <div className='ui basic content center aligned segment'>
      <button className='ui basic button icon' onClick = {()=>{addableHandler(addable,setAddable)}} >
        <i className='plus icon' />
      </button>
    </div>
  );
}

function App() {
  const [addable,setAddable] = useState(true)
  const [tasks,setTasks] = useState(initialTasks)
  return (
    <div className='ui three column centered grid'>
      <div className='column'>
        {task}
        {addable?null:TaskForm(addable,setAddable,tasks,setTasks)}
        {addable?AddButton(addable,setAddable):null}
      </div>
    </div>
  );
}

function addableHandler(addable,setAddable){
  setAddable(!addable)
}


export default App;

