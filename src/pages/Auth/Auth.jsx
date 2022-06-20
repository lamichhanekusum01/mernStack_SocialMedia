import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className='Auth'>
        <div className="aLeft">
            <img src={Logo} alt="" />
            <div className="WebName">
                <h1>KU Media Group</h1>
                <h6>Get connected with the world</h6>
            </div>

        </div>

<SignUp/>
    </div>
  )
}
function SignUp(){
    return(
        <div className="aRight">
            <form action ="" className='infoForm'>
                <h3> Sign Up</h3>
                <div>
                    <input type="text" placeholder='FirstName' className='infoInput' name='firstname' />
                    <input type="text" placeholder='LastName' className='infoInput' name='lastname' />

                </div>
                <div>
                    <input type ="text" className='infoInput' name='username'placeholder='Username'/>
                </div>
                <div>
                <input type="text" placeholder='Password' className='infoInput' name='Password' />
                <input type="text" placeholder='Confirm Password' className='infoInput' name='confirm password' />

                </div>
                <div>
                    <span>Already have an account. LOGIN!</span>
                </div>
                <button className='button sbButton' type='submit'>Sign Up</button>
            </form>

        </div>
    )
}
export default Auth