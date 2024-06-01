import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_POST } from '../../constants/actionTypes';

export default (posts = [], action) => {
  const user=JSON.parse(localStorage.getItem('profile'))
  if(user){
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      case FETCH_POST:
        return {post: action.payload.post };
    case DELETE:
      return posts.filter((post)=>post._id!==action.payload)
    default:
      return posts;
  }
}
return null;
};
