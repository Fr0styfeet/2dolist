"use client";
import React, { useState } from "react";

const Page = () => {
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");
  const [mainTask,setMaintask]=useState([]);
  const [mode,setMode]=useState('light');
  const submitHandler=(e)=>{
    setMaintask([...mainTask,{task,note}]);
    e.preventDefault()
    setTask("")
    setNote("")
    console.log(mainTask)
  }

  const delHandle=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setMaintask(copyTask)
  }

  const editHand = (i) => {
    const editedTask = mainTask[i];
    setTask(editedTask.task);
    setNote(editedTask.note);

    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMaintask(copyTask);
  };

  const delAll=()=>{
    console.log("eiofhesf")
    setMaintask([]);
  }

  const darkM=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
    }
  }

  let taskRender=<h1 className="flex justify-center">No tasks to do right now</h1>

  if (mainTask.length>0) {
    taskRender=mainTask.map((t,i)=>{
      return ( 
        <li key={i} className={`flex flex-row justify-between mb-4 p-2 ${mode === 'dark' ? 'text-white bg-slate-800' : ''}`}>
        <div className="p-2 ">
        <h3 className="text-lg font-semibold">{t.task}</h3>
        <h4 className="text-sm">{t.note}</h4>
        </div>
        {/* <button className=" bg-red-500 px-4 py-1 -space-x-32 text-white font-semibold rounded-md ">Delete</button> */}

       <div>
       <i className="material-icons" onClick={()=>{
        editHand(i)
      }} style={{ fontSize: '40px',marginTop:'-9px',marginLeft:'80px', color: 'grey',cursor:'pointer' }}>edit</i>


      <i className="fa fa-trash-o" onClick={()=>{
        delHandle(i)
      }} style={{ fontSize: '40px',marginTop:'-100px',marginLeft:'80px', color: mode==='light'?'red':'red',border: mode==='light'?'red':'red' ,cursor:'pointer' }}></i>
       </div>
      
        </li>
      )
    })
  }

  
  return (
    <>
        
      <h1 className={`font-bold text-4xl p-5  text-white text-center ${mode=='dark'? ' bg-slate-900':' bg-blue-500'} `}>
        My To-Do List
        
      </h1>
      <i className="material-icons" onClick={darkM} style={{ fontSize: '40px', color: mode==='light'?'black':'white',marginTop:'3px',marginRight:'2px',float:'right',cursor:'pointer' }}>nights_stay</i>
      <div className="flex flex-col items-center mt-8 mb-2 md:flex-row md:justify-evenly md:ml-8">
      <form className="flex flex-col items-center  justify-evenly md:flex-row" onSubmit={submitHandler}>
        <input
          type="text"
          className={`text-xl font-semibold border-2 my-4 p-3 px-4  md:w-96 ${mode=='dark'? ' bg-slate-800  border-white text-white':' bg-white  border-zinc-700 text-black'}`}
          placeholder="Enter task"
          value={task}
          onChange={(e)=>{
            setTask(e.target.value)
          }}
        />
        <input
          type="text"
          className={`text-xl font-semibold border-2 my-4 p-3 px-4  md:w-96 md:ml-10  ${mode=='dark'? ' bg-slate-800  border-white text-white':' bg-white  border-zinc-700 text-black'}`}
          placeholder="Enter a note"
          value={note}
          onChange={(e)=>{
            setNote(e.target.value)
          }}
        />
        <button
          className={`my-6 px-4 py-3 md:w-32 rounded-sm font-semibold  focus:outline-green-600 md:ml-20 ${mode=='dark'? ' bg-slate-200  border-green-400 text-green-700 border-2':' bg-green-400  border-green-700 text-white'}`}>ADD TASK
        </button>
      </form>
      <button onClick={delAll}
          className={`my-6 px-4 py-3 md:w-32 rounded-sm font-semibold focus:outline-red-600 md:-ml-20  ${mode=='dark'? ' bg-slate-200  border-red-400 text-red-600 border-2':' bg-red-400  border-red-700 text-white'}`}>DELETE ALL 
        </button>
        </div>
      <hr /><br />
      <h2 className={` flex flex-row justify-center font-semibold text-2xl ${mode=='dark'? ' text-white':' text-black'}`}>MY TASKS</h2>
      <div className="flex flex-row justify-center   mt-7 ">
          <div className={`p-3 bg-slate-100 w-auto md:w-1/3 mb-5 ${mode === 'dark' ? 'text-white bg-slate-800' : ''}`}>
            <ul>{taskRender}</ul>
          </div>
      </div>
    </>
  );
};

export default Page;
