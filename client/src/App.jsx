import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCheck, FaX } from "react-icons/fa6";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [flag, setFlag] = useState(false);
  const [input, setInput] = useState('');
  const fetchData = async () => {
    try {
      let res = await axios.get('http://localhost:8000/todo');
      setTodos(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData()
  }, [flag])
  const handleClick = async () => {
    try {
      let res = await axios.post('http://localhost:8000/todo', { name: input });
      setFlag(!flag);
      setInput('');
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  }
  const changeStatus = async (value) => {
    try {
      await axios.put(`http://localhost:8000/todo/${value.id}`, { completed: value.completed });
      setFlag(!flag);
    } catch (err) {
      console.log(err);
    }
  }
  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:8000/todo/${id}`);
      setFlag(!flag);
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div className='bg-indigo-200 min-h-[732px]' >
        <div className='flex justify-center items-center py-12'>
          <div className='bg-white p-4 w-[450px]'>
            <strong className='text-2xl'>User Management</strong>
            <div className='flex mt-6 gap-1.5 mb-3 w-full'>
              <input type="text" className='border border-slate-400 rounded px-2 py-1 w-10/12' placeholder='Add your new todo' onChange={(e) => setInput(e.target.value)} value={input} />
              <button className=' bg-violet-500 rounded w-2/12 flex justify-center' onClick={handleClick}>ADD</button>
            </div>
            <div className='flex flex-col gap-y-2'>
              {todos.length > 0 && todos.map((e, i) => (
                <div className='flex justify-between bg-slate-200 gap-10' key={e.id}>
                  <div className='py-2 px-3' style={{ textDecoration: e.completed ? 'line-through' : '' }} >{e.name}</div>
                  <div className='flex'>
                    <button className={!e.completed ? 'bg-green-400' : 'bg-slate-50'} onClick={() => changeStatus(e)}>{e.completed ? <FaX /> : <FaCheck />}</button>
                    <button className='bg-red-500' onClick={() => handleDelete(e.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
