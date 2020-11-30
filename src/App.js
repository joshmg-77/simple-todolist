import React,{useState} from 'react';
import Listed from "./Components/ListedComponents"
import Input from "./Components/Input"
import Button from "./Components/Button"
import  "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

 const App =(props)=>{
  
  const [lists, setArrayList] = useState([])
  const [valueInput, setValueInput] = useState("")
  
  
  const HandledOnchange =(event)=>{
    setValueInput(event)
  }
  const HandledSave = (e)=>{
    e.preventDefault()
    return valueInput===""?window.alert("Write something ✍✍   "):setArrayList([...lists,valueInput])+setValueInput("");
 }
 const HandledDelete =(a)=>{
   let Confirm = window.confirm("you want to delete this element 🤔");
   return Confirm?(lists.splice(a,1)+setArrayList([...lists])):(window.alert("Element no removed 😃"));
 } 
   return(
     <div
       className="container row w-100 h-auto m-auto d-flex justify-content-center ">
       <img src="https://image.flaticon.com/icons/svg/1997/1997305.svg" className="mt-5" width="300" height="120"/>
       <form onsubmit={HandledSave} className="form-group d-flex justify-content-center w-75 mt-5" >
       <Input 
         manage={HandledOnchange}
         value={valueInput}/>
       <Button 
          HandledSave={HandledSave}
        />
        </form>
         <ol className="w-100 list-group list-group-block  m-auto mt-5 mb-3"
          >
            <Listed 
              Delete={HandledDelete}
              Lists={lists}/>
         </ol>
      </div>
    )
 }

export default App;
