const NEW_POST = 'NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData : [
    {id:1, name:'Классный Иван', ava: 'https://www.rp-assets.com/images/news/2018/06/27/45147-large.jpeg', like: 2, repost: 3, message: 'Тут будет находится текст поста, тот самый который оставил данный комментатор - чей аватар вы видите на экране'},
    {id:2, name:'Груздная Алксандра', ava: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg', like: 10, repost: 3, message: 'Шла Саша по шоссе и сосала ... сушку'},
  ],
  newPostText: ''
}

const userPageReducer = (state = initialState, action) =>{
  switch(action.type){
    case NEW_POST :
      let newbp = {
                  id:3 ,
                  name: 'sm',
                  ava: 'none',
                  like: 0,
                  repost: 0,
                  message: state.newPostText
    };
            return {
                    ...state,
                    postData : [...state.postData, newbp],
                    newPostText : ''
                    };
    case  UPDATE_NEW_POST_TEXT :
    return  {
              ...state,
              newPostText : action.newText
    };
    default :
       return state;
    }
  }
export const newPostCreator = () =>({ type: NEW_POST })
export const onPostUpdateCreator = (text) =>
  ({ type : UPDATE_NEW_POST_TEXT, newText : text })

export default userPageReducer;
