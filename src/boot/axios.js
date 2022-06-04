import { boot } from 'quasar/wrappers'
import axios from 'axios'

const api = () => {
  return axios.create({
    baseURL: process.env.API,
    headers: {
      common: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    validateStatus: (status) => {
      return status < 400
    }
  })
}

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
