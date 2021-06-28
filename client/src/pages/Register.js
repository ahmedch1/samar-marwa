import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import {registerUser} from '../actions/authActions';


const Register =({history}) =>{
    const[info,setInfo]=useState({
        firstname:"",
        lastname:"",
        phone:"",
        age:"",
        email:"",
        passWord:"",
    });
const dispatch = useDispatch();
const auth  = useSelector(state => state.auth);
useEffect(() => {
    if (auth.isAuth){
        history.push("/feed")
    }
    }, [auth.isAuth])

    const handleChange =(e) =>{
        setInfo({...info,[e.target.name] :e.target.value})
    }
    
    
    const registerNow = e=>{
        e.preventDefault ()
        dispatch(registerUser(info));
    };

    
    return (
        <section className="section-form">
        <span className="title-contact">Register </span>
        <div className="container">
        <form onSubmit={registerNow} >
            <div className="row mt-3">
            <div className="form-group">
                <label> First Name </label>
                <input type="text"
                name="firstname" 
                placeholder="Enter your First Name..."
                onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label> Last Name </label>
                <input type="text" 
                name="lastname"
                placeholder="Enter your Last Name..."
                onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label> Phone </label>
                <input type="text" 
                name="phone" 
                placeholder="Enter your Phone Numbre..."
                onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label> Age </label>
                <input type="text" 
                name="age" 
                placeholder="Enter your Age..."
                onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label> E-mail </label>
                <input type="text" 
                name="email" 
                placeholder="Enter your Adress Mail..."
                onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label> PassWord </label>
                <input type="passWord" 
                name="PassWord" 
                placeholder="Enter your PassWord..."
                onChange={handleChange}/>
            </div>
            <div >
            <button type="submit" >Register </button></div>
    
            </div> 
        </form>
        </div> 
       
    </section>

    )
    } 
    
    
export default Register ;