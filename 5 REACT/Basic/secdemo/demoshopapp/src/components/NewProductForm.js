import './NewProductForm.css';
import { useState } from 'react';

export default function NewProductForm(props){

    const [textIN,settext] = useState('');
    const [dateIN,setDate] = useState('')

    function textHendler(event){
        console.log(event.target.value);
        settext(event.target.value);
    }
    function datetHendler(event){
        console.log(event.target.value);
        setDate(event.target.value);
    }
    function submitForm(event){
        event.preventDefault();
        const details = {
            newtext : textIN,
            newDate : dateIN
        }
        console.log(details);
        props.data(details);

        setDate('')
        settext('')



    }
    return(
        <form className='productForm' onSubmit={submitForm}>
            <lable>Title: </lable>
            <input type='text' className='text' onChange={textHendler} value={textIN}></input>
            <lable>Date: </lable>
            <input type='date' className='date' onChange={datetHendler} value={dateIN}></input>
            <button type='submit'>Add Product</button>
        </form>
    );
}