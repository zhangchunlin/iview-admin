import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: '/backend/bapi/login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: '/backend/apijson/get',
    data: {
      'user': { '@role': 'OWNER' }
    },
    method: 'post'
  })
    .then(function (r) {
      var user = r.data.user
      var nickname = user.nickname || user.username
      var data = {
        name: nickname,
        user_id: user.id,
        access: ['super_admin', 'admin'],
        avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
      }
      return { data }
    })
}

export const logout = (token) => {
  return axios.request({
    url: '/backend/bapi/logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: '/backend/bapi/message_count',
    method: 'get'
  })
}

export const getMessage = () => {
  return {
    unread: [],
    readed: [],
    trash: []
  }
}

export const getContentByMsgId = msg_id => {
  return `<divcourier new',="" monospace;font-weight:="" normal;font-size:="" 12px;line-height:="" 18px;white-space:="" pre;"=""><div>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: medium;">这是消息内容，这个内容是使用<span style="color: rgb(255, 255, 255); background-color: rgb(28, 72, 127);">富文本编辑器</span>编辑的，所以你可以看到一些<span style="text-decoration-line: underline; font-style: italic; color: rgb(194, 79, 74);">格式</span></span></div><ol><li>你可以查看Mock返回的数据格式，和api请求的接口，来确定你的后端接口的开发</li><li>使用你的真实接口后，前端页面基本不需要修改即可满足基本需求</li><li>快来试试吧</li></ol><p>test</p></divcourier>`
}

export const hasRead = msg_id => {
  return true
}

export const removeReaded = msg_id => {
  return true
}

export const restoreTrash = msg_id => {
  return true
}
