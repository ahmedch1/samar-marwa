import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "./actions/authActions";
import { useSelector,useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const NavBar = () => {
	const dispatch = useDispatch()
	const auth= useSelector((state) => state.auth)
	
return (
    <div className="navbar">
			<Link to="/" className="li">Home</Link>
            {auth.isAuth ?  (
				<div>
				<Link to="/profil" className="li">Home</Link>
                <Link onClick={()=> dispatch(logoutUser)}>Log out</Link>
				</div>
			):(
			<div>
			<Link to="/Login"  className="li">Login</Link>
			<Link to="/Register" className="li" >Register</Link>
			<Link to="/Materiel" className="li" >Materiel</Link>
			<Link to="/places" className="li" >Places</Link>

			</div>
			
			
			)}
			
		
</div>
)
};

export default NavBar;
