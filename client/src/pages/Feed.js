import React,{useEffect} from 'react';
import { loadUser } from '../actions/authActions';
import { useDispatch } from 'react-redux';

const Feed = () =>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
        
    }, [])
        return (
            <div>
            <h1> feed page</h1>
            </div>
        )
}
export default Feed ;
