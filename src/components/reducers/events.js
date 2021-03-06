 //  action ={
import { CREATE_EVENT, DELETE_ALL_EVENTS, DELETE_EVENT } from '../../actions/index';
// type: "CREATE_EVENT",
// title: "2020東京オリンピック延期のお知らせ"
//body: "2020年東京オリンピックは新型コロナウイルスの影響により延期されました！つきましては・・・"
//}
const events = (state=[], action)=>{
  switch(action.type){
    case CREATE_EVENT:
      const event ={
        title: action.title,
        body: action.body
      }
      const length = state.length
      const id = length === 0 ? 1 : state[length -1].id + 1
      return [...state, {id, ...event}]
    case DELETE_EVENT:
      return state.filter(event=> event.id !== action.id)
    case DELETE_ALL_EVENTS:
      return []
    default:
      return state
  }
}
export default events;
