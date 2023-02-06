import { get, post } from '../plugins/request'

// 用户请求
const user = () => {
  const getUser = (url: string, params: any) => {
    return get(url, params)
  }
  return {
    getUser
  }
}

// 权限请求
const permission =  () => {
  const login = (url: string, params: any) => {
    return get(url, params)
  }
  return {
    login
  }
}

const userService = user()
const permissionService = permission()

export { userService, permissionService }
