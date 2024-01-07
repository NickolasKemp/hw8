import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [todo, setTodo] = useState({title: "", desc: ""})

  const addTodo = () => { 
    let todos = localStorage.getItem("todos")
    if (todos){
      let todosJson = JSON.parse(todos)
      if(todosJson.filter(value=>{ return value.title==todo.title}).length > 0){
        alert("Todo with this title already exists")
      }
      else{ 
        todosJson.push(todo)
        localStorage.setItem("todos", JSON.stringify(todosJson))
        alert("Todo has been added")
        setTodo({title: "", desc: ""})
      }
    }
    else{
      localStorage.setItem("todos", JSON.stringify([todo]))
    }
   }

   const onChange = (e) => { 

      setTodo({...todo, [e.target.name]: e.target.value})
      console.log(todo)
    }
  return (
    <div className="my-2 text-3xl">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
           
          <div class="  bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Todo cart</h2>
            <div class="relative mb-6">
              <input placeholder="Add a task" onChange={onChange} value={todo.title} type="text" id="title" name="title" class="bg-transparent w-full border-none outline-none text-black text-lg" />
            </div>
            <div class="relative mb-6">
              <input placeholder="Add a description" onChange={onChange} value={todo.desc} type="text" id="desc" name="desc" class="w-full  bg-transparent  border-none outline-none text-lg text-gray-500" />
            </div>
            <button onClick={addTodo} class="text-white bg-blue-300 border-0 py-2 px-8 focus:outline-none w-fit hover:bg-blue-400 rounded text-lg">Add Todo</button>
          </div>
        </div>
      </section>
    </div>
  )
}
