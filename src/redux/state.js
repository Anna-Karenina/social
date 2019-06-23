let rerenderEntireTree = () => {
  console.log("hih");
}

let state = {
   dialogsPage: {
    dialogAuthor : [ //создание массива обьектов авторов
      {id: 1, name:'Шевцов Сергей', time: '11:59', lstmessage:'Туту вжух вжух когда ты будешь смелым, ловким, умелым, поедешь в джунгли, ведь они тебя зовут', ava:'http://www.giantmanagement.com/wp-content/uploads/2016/12/Featured-Image-3-650x813.jpg' },
      {id: 2, name:'Федоров Павел', time: '14:59', lstmessage:'Тата вжых вжых когда ты будешь кривым, косым , тупым, поедешь в джунгли, ведь они тебя зовут', ava:'http://www-static2.spulsecdn.net/pics/00/01/75/32/1753296_1_M.jpg' },
      {id: 3, name:'Ким ЧинЫр', time: '9:42', lstmessage : 'Туту вжух вжух когда ты будешь молодцом, ловким, умелым, поедешь в джунгли, ведь они тебя зовут', ava:'https://www.advocate.com/sites/advocate.com/files/2015/03/04/christopher-khor-x400d.jpg' }
    ],

    dialogMessages : [ //создание массива обьектов сообщений в окне диалоге
      {id: 1, msg: ' got wings?!' },
      {id: 2, msg:'Yes?!' },
      {id: 3, msg:'And where they?!'}
    ]
  },
     userPage: {
        postData : [
          {id:1, name:'Классный Иван', ava: 'https://www.rp-assets.com/images/news/2018/06/27/45147-large.jpeg', like: 2, repost: 3, message: 'Тут будет находится текст поста, тот самый который оставил данный комментатор - чей аватар вы видите на экране'},
          {id:2, name:'Груздная Алксандра', ava: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg', like: 10, repost: 3, message: 'Шла Саша по шоссе и сосала ... сушку'},
        ],
        newPostText: ''
      }
    }

export let newPost = (postMessage) => { //функиця добавления поста на странице стены
    let newbp = {
      id:3 ,
      name: 'sm',
      ava: 'none',
      like: 0,
      repost: 0,
      message: state.userPage.newPostText
    };
    state.userPage.postData.push(newbp);
    state.userPage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => { //функиця добавления поста на странице стены
    state.userPage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subScribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;
