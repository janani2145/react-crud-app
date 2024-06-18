import { DELETE_USER, FETCH_ID_USER, FETCH_USER, POST_USER, UPDATE_USER } from "./Type"

export const postSuccess = (data)=>{
    return{
    type : POST_USER,
    payload: data

};
}
export const fetchSuccess = (data)=>{
    console.log(data);
    return{
    type : FETCH_USER,
    payload: data

};
}
export const fetchIdSuccess = (data)=>{
    return{
    type : FETCH_ID_USER,
    payload: data

};
}
export const updateSuccess = (data)=>{
    return{
    type : UPDATE_USER,
    payload: data

};
}
export const deleteSuccess = (id)=>{
    return{
    type : DELETE_USER,
    payload: id

};
}