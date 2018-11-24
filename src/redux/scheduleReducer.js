import {combineReducers} from 'redux'

function testReducer(state=null, action){
  switch(action.type){
    case 'TEST':
      return action.test
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  test: testReducer
})
export default rootReducer
