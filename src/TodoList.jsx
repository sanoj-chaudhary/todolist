import React, { useState } from 'react'

const TodoList = () => {
    const [activity, setActiivity] = useState('');
    const [listData, setListData] = useState([])
    const [error, setError] = useState(false)

    const addActivity = () =>{
        if(activity){
            setListData((listData)=>{
                const updatelist = ([...listData,activity]);
                setActiivity('')
                console.log(updatelist)
                return updatelist;
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
        <li>{item}<span onClick={()=>removeItem(key)} class="close">×</span></li> 
        ))
    }
  </ul>
   
    </>
  )
}

export default TodoList