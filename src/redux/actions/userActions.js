
import {SET_USER} from '../constants/UserConstants'
import {push} from 'connected-react-router'

const authHeaders= {
  'Content-Type':'application/json',
  'Accept': 'application/json',
  Authorization: `Bearer ${localStorage.getItem("token")}`
}

const normalHeaders = {
  'Content-Type':'application/json',
  'Accept': 'application/json'
};

export function login(email,password){
  const url = 'http://localhost:3000/login';

  let data= JSON.stringify({
    email: email,
    password: password
  });

  return function(dispatch){
     fetch(url,{
      method: 'POST',
      headers:normalHeaders,
      body: data
    }).then(res => {
      console.log(res)
      if (res.status === 401 || res.status === 404) {
            alert("login failed");
          } else {
            return res.json();
          }
    }).then(json=>{
      if(!json){
        return dispatch(push('/login'))
      }
      localStorage.setItem('token',json.token)
      dispatch({type:SET_USER, user:json.user})
      setTimeout(()=>dispatch(push('/home')),2000)
    })
  }
}
export function createUser(user){
  const url = 'http://localhost:3000/users';
  let data = JSON.stringify({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password
  });

  return function(dispatch){
    fetch(url,{
      method: 'POST',
      headers: normalHeaders,
      body: data
    }).then(res=>{
      console.log(res.json())
    })
  }
}
