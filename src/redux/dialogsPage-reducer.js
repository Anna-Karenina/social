const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE= 'SEND-MESSAGE';

let initialState = {
  dialogAuthor : [ //создание массива обьектов авторов
    {id: 1, name:'Шевцов Сергей', time: '11:59', lstmessage:'Туту вжух вжух когда ты будешь смелым, ловким, умелым, поедешь в джунгли, ведь они тебя зовут', ava:'http://www.giantmanagement.com/wp-content/uploads/2016/12/Featured-Image-3-650x813.jpg' },
    {id: 2, name:'Федоров Павел', time: '14:59', lstmessage:'Тата вжых вжых когда ты будешь кривым, косым , тупым, поедешь в джунгли, ведь они тебя зовут', ava:'http://www-static2.spulsecdn.net/pics/00/01/75/32/1753296_1_M.jpg' },
    {id: 3, name:'Ким ЧинЫр', time: '9:42', lstmessage : 'Туту вжух вжух когда ты будешь молодцом, ловким, умелым, поедешь в джунгли, ведь они тебя зовут', ava:'https://www.advocate.com/sites/advocate.com/files/2015/03/04/christopher-khor-x400d.jpg' }
  ],

  dialogMessages : [ //создание массива обьектов сообщений в окне диалоге
    {id: 1, msg: ' got wings?!' },
    {id: 2, msg:'Yes?!' },
    {id: 3, msg:'And where they?!'}
  ],
  newMessageBody: ''
}

const dialogsPageReducer = (state = initialState, action) => {
    switch(action.type){
      case  UPDATE_NEW_MESSAGE_BODY :
        return {
                  ...state,
                  newMessageBody : action.body
        };
      case SEND_MESSAGE :
        let body = state.newMessageBody;
        return {
          ...state,
                    newMessageBody: '',
                    dialogMessages : [...state.dialogMessages, {id: 4, msg: body }]
        };
       default :
                return state;
  }
}
export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
export const updateNewMessegeBodyCreator = (body) =>
  ({ type : UPDATE_NEW_MESSAGE_BODY, body : body })


export default dialogsPageReducer;
