
import {SET_USER} from '../constants/UserConstants'
import {push} from 'connected-react-router'
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
     fetch(url,{
      method: 'POST',
      headers:headers,
      body: data
    }).then(res => {
      console.log(res)
      if (res.status === 401 || res.status === 404) {
            alert("login failed");
          } else {

            return res.json();
          }
    }).then(json=>{
      localStorage.setItem('token',json.token)
      dispatch({type:SET_USER, user:json.user})
      setTimeout(()=>dispatch(push('/home')),2000)
    })
  }
}
