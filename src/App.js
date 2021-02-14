import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th',
      reminder: true,
    },
    {
      id: 2,
      text: 'School',
      day: 'Feb 6th',
      reminder: true,
    },
    {
      id: 3,
      text: 'Code Challenge',
      day: 'Feb 7th',
      reminder: false,
    }
  ])
  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      : 'No Tasks To Show'}
    </div>
  );
}

export default App;
