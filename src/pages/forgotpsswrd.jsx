import React from 'react'
import './forgotpsswrd.css'
import { Link } from 'react-router-dom'

export default function Forgotpsswrd() {
  return (
  
    <div className='log1'>
      
      <span className='title'>FORGOT<br/> YOUR PASSWORD ?</span>
      <br/><br/>
      <div className='area'>
      <table>
            <tr>
                <td className='tex'>
                <label for="email">EMAIL:</label>
                </td>
                <td>
                    <input typy= "text" id='email' name='user' placeholder='abc123@xyz.com' required  ></input>
                </td>
            </tr>
      </table>
      <br/>
      <button className='bttn'><Link to="/register" style={{ textDecoration: 'none', color:'black'}}>RESET PASSWORD</Link></button>
      </div>  
    </div>
  
  )
}
