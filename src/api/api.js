import * as axios from 'axios';

const instance = axios.create({
      withCredentials:true,
      baseURL : `https://social-network.samuraijs.com/api/1.0/`,
      headers:{"API-KEY":"a9023fdb-52c6-4532-b267-8243c2ddb9ab"}
});

export const UserAPI = {
  getFriends (currentPage = 1, pageSize = 10)  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data;
    });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`)
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },

  getPropfile(userId) {
    console.warn ('Устаревший метод. Используйте profileApi обьект')
    return profileApi.getPropfile(userId);
  }
}

export const profileApi = {
  getPropfile(userId){
      return instance.get(`profile/` + userId);
    },
  getStatus(userId){
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status){
    return instance.put(`profile/status/`, {status: status});
  }
}


export const authAPI = {
  me() {
     return instance.get(`auth/me`)
  },
  login(email, password, rememberMe) {
    return instance.post(`auth/login`, {email, password, rememberMe} )
  },
  logout() {
    return instance.delete(`auth/login` )
  }
}
