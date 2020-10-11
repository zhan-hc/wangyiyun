import service from '@/utils/http.js'
import { Toast } from 'mint-ui' // 提示框
const Login = (param) => {
  service({
    url: '/login/cellphone',
    params: param,
    method: 'get'
  }).then((res) => {
    console.log(res)
    if (res.data.code === 400) {
      Toast({
        message: '用户名或密码错误',
        position: 'bottom',
        className: 'toasts'
      })
    }
  })
}
const checkLogin = () => service({url: '/login/status'}).then((res) => {
  console.log(res)
})
export { Login, checkLogin }
