import { DELETE_USER, FETCH_ID_USER, FETCH_USER, POST_USER, UPDATE_USER } from "./Type"

export const initialState= {
    users:[],
  

}
export const Reducer=(state,action)=>{
switch(action.type){
case POST_USER:
    return{
       ...state,  users: [...state.users, action.payload]
    };
case FETCH_USER:
    return{
        ...state,users: action.payload
    }

case FETCH_ID_USER:
        return {
          ...state,
          users: [action.payload]
        }
case DELETE_USER:
    return{
        ...state, users:[...state.users.filter((user)=>user.id !== action.payload)]
    }

case UPDATE_USER:
    return{
        ...state,
         users:  state.users.map((user)=>user.id === action.payload.id? action.payload : user),
    }
    default :
     return state;
}
}