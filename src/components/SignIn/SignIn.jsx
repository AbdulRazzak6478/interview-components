import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../SignUp/signup.css';

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    function OnSetFormData(event){
        setFormData((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value,
        }));

        console.log('form data : ',formData)
    }
    async function onSubmitData(event){
        setLoading(true)
        event.preventDefault()
        setActive(true);
        console.log('onsubmit data click');
        console.log('form data : ',formData)
        setTimeout(() => {
            console.log('signup done1')
        }, 3000);
        setTimeout((function(){
                console.log('sign up done2 !');
            })(), 2000)
        console.log('sign up done3 !');
        // setFormData({
        //     email:'',
        //     password:'',
        // });
        console.log('successfully register')
        setLoading(false)
    }
  return (
    <>
        <div className="signup">
            <div className="title">Sign In</div>
            <form action="">
                <div className="field">
                    <div >Email* </div><input type="text" id="email" value={formData.email} onChange={OnSetFormData}  placeholder='Enter Your Email ...' required />
                    <div className={`${!active ? 'solve': formData.email.length === 0 ? 'error': 'solve' } `}>Email* is required.</div>
                </div>
                <div className="field">
                    <div >password* </div><input type="password" id="password" value={formData.password} onChange={OnSetFormData}  className='hide' placeholder='Enter Password ...' required />
                    <div className={`${!active ? 'solve': formData.password.length === 0 ? 'error': 'solve' } `}>Password* is required.</div>
                </div>
                <button type="submit" className={`register sign ${loading ? 'load':''}`} onClick={onSubmitData}>{ loading ? "Loading ..." : "Sign In"}</button>
                <div className="options">
                    <div className="up">Don't have a account? <Link to="/signup"><span>Sign Up</span> </Link></div>
                    <div className="forget">Forget Password</div>
                </div>
            </form>
        </div>
    </>
  )
}

export default SignUp;