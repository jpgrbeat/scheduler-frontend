
import {SET_USER} from '../constants/UserConstants'
import {Dispatch} from 'react-redux'
export function login(email,password){
  const url = 'http://localhost:3000/login';
  let data= JSON.stringify({
    email: email,
    password: password
  });
  const headers = {
    'Content-Type':'application/json',
    'Accept': 'application/json'
  };


  return function(dispatch){
    return fetch(url,{
      method: 'POST',
      headers:headers,
      body: data
    })
    .then(res => {
      if (res.status === 401) {
            alert("login failed");
          } else {
            return res.json();
          }
    })
  }
  .then(json=>{
    localStorage.setItem('token',json.token)
    dispatch({type:SET_USER, user:json.user})
  })
}
