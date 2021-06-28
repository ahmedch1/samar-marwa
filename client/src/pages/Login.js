import React,{useState,useEffect} from "react";
import { loginUser } from "../actions/authActions";
import { useDispatch,useSelector } from "react-redux";  


const Login =({history}) =>{
    const[info,setInfo]=useState({
        Email:"",
        PassWord:"",
    });
    const [errors, setErrors] = useState(null)
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        setInfo({...info,[e.target.name]:e.target.value});
    };

    const login =(e) =>{
        e.preventDefault();
        dispatch(loginUser(info));
    };
    const auth  = useSelector((state) => state.auth);
    useEffect(() => {
    if (auth.isAuth){
        history.push("/feed")
    }
    if(auth.error){
        setErrors(auth.error);
        setTimeout(()=>{
        setErrors(null)
    },5000)
    }

}, [auth.isAuth, auth.error]);
    return (
        <section className="section-form">
        <span className="title-contact">Login ... </span>
        <div className="container">
        <form>
            <div className="form-group">
                <label> E-mail </label>
                <input type="text" 
                name="email" 
                placeholder="Enter your Adress Mail..."
                onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label> PassWord </label>
                <input type="PassWord" 
                name="PassWord"
                placeholder="Enter your PassWord..."
                onChange={handleChange}/>
            </div>
            {errors && errors.map(el => <h1>{el.msg}</h1>)}
            <button type="submit"> Login </button>
        </form>  
        </div>
        
        </section>

    );
}
export default Login 