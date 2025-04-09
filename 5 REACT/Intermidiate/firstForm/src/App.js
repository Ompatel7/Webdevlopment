import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setformData] = useState( { Fname:'', Lname:'' ,Email:'', Comment:'', isVisible:false , mode:'', favCar:'Scorpio'} );

  function changeHandler(event){
    const {name,type,checked,value} = event.target
    setformData( (privousData) =>{
       return {
        ...privousData,

        [name] : type === 'checkbox' ? checked : value
       }   
    }
  );
    }
  
    // console.log(formData);

    function submitHandler(event){
      event.preventDefault();
      console.log('printing form data');
      console.log(formData);
    }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        <input type='text' placeholder='Enter First Name' name='Fname' value={formData.Fname} onChange={changeHandler}/>

        <br/>
        <br/>

        <input type='text' placeholder='Enter Last Name' name='Lname' value={formData.Lname} onChange={changeHandler}/>

        <br/>
        <br/>

        <input type='email' placeholder='Enter Your Email' name='Email' value={formData.Email} onChange={changeHandler}/>

        <br/><br/>

        <textarea placeholder='Type your Comment' name='Comment'  onChange={changeHandler}></textarea>

        <br/>
        <br/>

        <input type='checkbox' name='isVisible' id='isVisible' checked ={formData.isVisible} onChange={changeHandler} />
        <label htmlFor='isVisible'>Am I isVisible</label>

        <br/><br/>

        <fieldset>
          <legend>Mode</legend>

        <input type='radio' name='mode' id='Online-mode' value='Online-mode' checked={formData.mode === 'Online-mode'} onChange={changeHandler}/>
        <lable htmlFor='Online-mode'>Online mode</lable>

        <input type='radio' name='mode' id='Offline-mode' value='Offline-mode' checked={formData.mode === 'Offline-mode'} onChange={changeHandler}/>
        <lable htmlFor='Offline-mode'>Offline mode</lable>
        </fieldset>
        
        <label htmlFor='favCar'>Tell me your Favourite Car </label>
        <select id='favCar' name='favCar' onChange={changeHandler} value={formData.favCar}>
          <option value='Scorpio'>Scorpio</option>
          <option value='Thar'>Tharr</option>
          <option value='Defender'>Defender</option>
          <option value='Mahindra'>Mahindra</option>
        </select>

        <br/><br/>
        <button>Submit</button>
      </form> 
    </div>
  );

}


export default App;
