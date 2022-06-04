import { api } from 'boot/axios'

class HinoService {
  _name = 'hinonovo'

  async get () {
    try {
      const instance = api()
      const response = await instance.get(`${this._name}`)

      return response
    } catch (error) {
      return null
    }
  }

  async getById (id) {
    try {
      const instance = api()
      const response = await instance.get(`${this._name}/${id}`)

      return response
    } catch (error) {
      return null
    }
  }
}

export default new HinoService()
