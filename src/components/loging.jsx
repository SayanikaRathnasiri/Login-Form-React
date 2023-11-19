import React, {useState} from 'react'
import './loging.css'
import { Link } from 'react-router-dom'

export default function Loging() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
//define the function
    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className='log'>
    <form onSubmit={handleSubmit} >
        <span className='form'>LOGING FORM</span><br/>
        <tr>
                <td className='text'>
                <label for="email">EMAIL:</label>
                </td>
                <td>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id="email" name="email" required/>
                </td>
        </tr>
        <tr>
                <td className='text'>
                <label for="password">PASSWORD:</label>
                </td>
                <td>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder='*********' id="password" name="password" required/>
                </td>
            </tr>

        <p className='forgot'><Link to="/forgotpsswrd" style={{ textDecoration: 'none', color:'red'}}>Forgot Password ?</Link></p> 
            <button className='bttn'><Link to="/homepage" style={{ textDecoration: 'none', color:'black'}}>LOGIN</Link></button>
            <br/>
            <p className='mem'>Not a member ?<Link to="/register" style={{ textDecoration: 'none', color:'blue'}}> SIGNUP NOW</Link></p>  
    </form>
    </div>
  )
}
