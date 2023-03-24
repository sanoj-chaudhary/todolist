import React, { useState } from 'react'

const TodoList = () => {
    const [activity, setActiivity] = useState('');
    const [listData, setListData] = useState([])
    const [error, setError] = useState(false)
    const locale = 'en';
    const [date, setDate] = useState(new Date().toLocaleDateString()); // Save the current date to be able to 
    const [time, setTime] = useState(new Date().toLocaleTimeString()); // Save the current date to be able to 

    const addActivity = () =>{
        if(activity){
            setListData((listData)=>{
                const now = new Date();
                const updatedList = ([...listData, {activity: activity,date: now.toLocaleDateString(locale),time: now.toLocaleTimeString(locale)        }]);
                setActiivity('')
                console.warn(updatedList)
                return updatedList;
            })
        }else{
           alert('Enter your choice')
        }
       
        }

        const removeItem = (id) =>{
            const updatedList = listData.filter((item,i)=>{
                return i != id;
            })

            setListData(updatedList)
        }
   
  return (
    <><div id="myDIV" class="header">
    <h2 >My To Do List</h2>
    <div className='inputwrapper'>

    <input type="text" placeholder='Add Activity'  value={activity} onChange={(e)=>setActiivity(e.target.value)} />
 
   
    <button class="addBtn" onClick={addActivity}>Add</button>
    

    </div>
  </div>
  
  <ul id="myUL">
    {
        listData.length>0 && listData.map((item,key)=>( 
        <li className='listitme'>{item.activity}<span>{item.date} &nbsp;{item.time}</span><span onClick={()=>removeItem(key)} class="close">×</span></li> 
        ))
    }
  </ul>
   
    </>
  )
}

export default TodoList