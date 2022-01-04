import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/027397d2cdcff6a45c088ed07cb69ef1/jd',
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const post = async (url: string, data: any = {}) => {
  const response = await instance.post(url, data)
  return response.data
}

const get = async (url: string, params: any = {}) => {
  const response = await instance.get(url, { params })
  return response.data
}

export { post, get }
