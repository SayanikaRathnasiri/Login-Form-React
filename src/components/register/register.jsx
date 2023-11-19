import React, {useState} from 'react'
import './register.css'
import { Link } from 'react-router-dom'


export default function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [uname, setUname] = useState('');
    //cheack box function
    function handleChange(e){}
    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className='log'>
    <form onSubmit={handleSubmit} >
        <span className='form'>SIGN IN</span>
        <table>
            <tr>
                <td className='text'>
                <label for="name">Full Name :</label>
                </td>
                <td>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='full name' id="name" name="name" required/>
                </td>
            </tr>
            <tr>
                <td className='text'>
                <label for="name">Username :</label>
                </td>
                <td>
                    <input value={uname} onChange={(e) => setUname(e.target.value)} type="text" placeholder='user_name' id="uname" name="uname" required/>
                </td>
            </tr>
            <tr>
                <td className='text'>
                <label for="email">Email:</label>
                </td>
                <td>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id="email" name="email" required/>
                </td>
            </tr>

            <tr>
                <td className='text'>
                <label for="password">Password:</label>
                </td>
                <td>
                    <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder='*********' id="password" name="password" required/>
                </td>
            </tr>
            <tr>
                <td className='text'>
                <label for="password">Repeat Password:</label>
                </td>
                <td>
                    <input type="password" placeholder='*********' id="password" name="password" required/>
                </td>
            </tr>
            {/* check box */}
            <input value = "test" type = "checkbox" onChange = {handleChange} /> 
            <span className='mem'> I agree with the <Link to="https://www.contractscounsel.com/t/us/website-terms-of-service" style={{ textDecoration: 'none', color:'blue'}}> term of services.</Link></span>
            
        </table>

        
            <button className='bttn'><Link to="/homepage" style={{ textDecoration: 'none', color:'black'}}>REGISTER</Link></button>
            <br/>
            <p className='mem1'>Already a member ?<Link to="/" style={{ textDecoration: 'none', color:'blue'}}> LOGIN HERE</Link></p> 
    </form>
    </div>
  )
}
