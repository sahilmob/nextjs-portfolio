const initialState = {
    userData: null,
    statusCode: null
}
export default (state = initialState, action)=>{
    switch (action.type){
        case "SET_USER_DATA":{
            return{
                ...state,
                userData: action.userData,
                statusCode: action.statusCode
            }}
        default:
        return state
    }
}