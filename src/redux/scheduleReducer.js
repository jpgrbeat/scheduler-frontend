import {combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router'
 function userReducer(state=null,action){
  switch(action.type){
    case 'SET_USER':
      return action.user
    default:
      return state
  }
}
const rootReducer = (history)=>combineReducers({
  user:userReducer,
  router: connectRouter(history)
})
export default rootReducer
