

export const  getUserData = ()=>{
    return async (disptach) =>{
        const res = await fetch("http://api.github.com/users/sahilmob");
		const statusCode = res.status > 200 ? res.status : false;
        const userData = await res.json();
		await disptach({type: "SET_USER_DATA", userData, statusCode})
    }
}