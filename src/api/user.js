import request from '../utils/request'

const userApi = {
  register(){
    return request({
      url: '/api/v1.user/register',
      method: 'post',
      data: {
        username: 'admin',
        password: 'admin',
        ackPassword: 'admin',
      },
    })
  },
  
  login(data){
    return request({
      url: '/api/admin/users/login',
      method: 'post',
      data,
    })
  },

  getUserInfo(){
    return request({
      url: '/api/admin/users/info',
      method: 'get',
    })
  },

  logout(){
    return request({
      url: '/api/v1.user/logout',
      method: 'post',
    })
  },
}

export default userApi