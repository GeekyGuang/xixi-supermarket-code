import axios from 'axios'

axios.defaults.baseURL = 'https://www.fastmock.site/mock/027397d2cdcff6a45c088ed07cb69ef1/jd'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const post = async (url: string, data: any = {}) => {
  const response = await axios.post(url, data)
  return response.data
}

const get = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}

export { post, get }
