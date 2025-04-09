import {useState} from 'react';

const Card = () => {

    const [formData,setFormdata] = useState({Fname:'', Lname:'',Email:'' , country:'', address:'',city:'',zip:'',state:'',tikvalue:false, notification:''});

    const changeHandler = (event)=> {
        const {value,checkbox,name,type} = event.target;
        setFormdata((privousData)=>{
            return{
                ...privousData,
                [name] : type === 'checkbox' ? checkbox : value
            }
        })
    }

    console.log(formData);

    return (
        <div className="m-auto h-[100vh] w-[100vw] bg-gray-500 flex justify-center">
            <form action="">
                <label htmlFor="Fname">First Name</label>
                <input type="text" name='Fname' id="Fname" value={formData.Fname} onChange={changeHandler}></input>
                <br/>
                <label htmlFor='Lname'>Last Name</label>
                <input type="text" name='Lname' id="Lname" value={formData.Lname} onChange={changeHandler}></input>
                <br/>
                <label htmlFor='Email'>Email address</label>
                <input type="email" name='Email' id="Email" value={formData.Email} onChange={changeHandler}></input>
                <br/>
                <lable htmlFor='country'>Country</lable>
                <select name="country" id="country" onChange={changeHandler}>
                    <option value='india'>india</option>
                    <option value='china'>China</option>
                    <option value='usa'>USA</option>
                </select>
                <br></br>
                <lable htmlFor='address' >Street address</lable>
                <input type="text" name='address' id='address' value={formData.address} onChange={changeHandler}></input>
                <br></br>
                <lable htmlFor='city'>City</lable>
                <input type="text" name='city' id='city' value={formData.city} onChange={changeHandler}></input>
                <br></br>
                <label htmlFor='state'>State</label>
                <input type="text" name='state' onChange={changeHandler}></input>
                <br></br>
                <label htmlFor='zip'>Zip/ Postal code</label>
                <input type="number" name='zip' onChange={changeHandler}></input>

                <div>

                <h2>By Email</h2>

                <input type="checkbox" name='tikvalue' id='tikvalue1' value='comments' checked={formData.tikvalue} onChange={changeHandler}/>
                <label htmlFor="tikvalue1">Comments</label>
                <br></br>

                <input type="checkbox" name='tikvalue' id='tikvalue2' value='candidate' checked={formData.tikvalue} onChange={changeHandler}/>
                <label htmlFor="tikvalue2">Candidates</label>

                <input type="checkbox" name='tikvalue' id='tikvalue3' value='offers' checked={formData.tikvalue} onChange={changeHandler}/>
                <label htmlFor="tikvalue3">Offers</label>

                </div>

                <div>
                    <h3>Push Notifications</h3>
                    <p>These are delivered via SMS to your mobile phone.</p>

                    <input type="radio" name='notification' id='notification' value='Everithing' checked={formData.notification.value} onChange={changeHandler}/>
                    <lable>Everything</lable>
                    <input type="radio" name='notification' id='notification' value='same as email' checked={formData.notification.value} onChange={changeHandler}/>
                    <label>Same as Email</label>
                    <input type="radio" name='notification' id='notification' value='no notification' checked={formData.notification.value} onChange={changeHandler}/>
                    <lable>No push notification</lable>
                </div>

                <button className="">Save</button>

               



            </form>
        </div>
    )
}

export default Card;