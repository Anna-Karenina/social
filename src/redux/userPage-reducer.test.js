import userPageReducer from './userPage-reducer'


it('new post shold be added', () => {
  let action = newPostCreator('itcamas.com')
  let state = {
    postData : [
      {id:1, name:'Классный Иван', ava: 'https://www.rp-assets.com/images/news/2018/06/27/45147-large.jpeg', like: 2, repost: 3, message: 'Тут будет находится текст поста, тот самый который оставил данный комментатор - чей аватар вы видите на экране'},
      {id:2, name:'Груздная Алксандра', ava: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg', like: 10, repost: 3, message: 'Шла Саша по шоссе и сосала ... сушку'},
    ],
  };
  let newState = userPageReducer(state, action)
  expect(newState.postData.length === 5 ).toBe(5)
});

