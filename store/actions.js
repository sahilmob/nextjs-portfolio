
import axios from 'axios';

export const  getUserData = ()=>{
    return async (disptach) =>{
        const res = await axios.get("http://api.github.com/users/sahilmob");
        const statusCode = res.status > 200 ? res.status : false;
		await disptach({type: "SET_USER_DATA", userData: res.data, statusCode})
    }
}