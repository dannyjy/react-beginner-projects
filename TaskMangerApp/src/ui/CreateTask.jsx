// import { useState, useEffect } from 'react'

const CreateTask = () => {
    // const [title,setTitle] = useState("");
    // const [description,setDescription] = useState("")
    // const [category, setCategory] = useState("general")

    const addTask = () => {

    }
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-[#520909] flex items-center justify-center">
        <form action="" className="bg-green-500 ">
            <label htmlFor="title"></label>
            <input type="text" name='title' placeholder='Enter the title of the task'/>
            <label htmlFor="description"></label>
            <textarea name="description" placeholder='Enter the description here' id=""></textarea>
            <select name="category" id="">
                <option value="general">General</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="shopping">Shopping</option>
            </select>
            <button onClick={addTask}>Save Task</button>
        </form>
    </div>
  )
}

export default CreateTask