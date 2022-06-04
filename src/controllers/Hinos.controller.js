import { showLoading, hideLoading } from '../utils/loading'
import { errorMessage } from '../utils/message'
import { exceptions } from '../api/exceptions'
import hinosService from '../services/Hinos.service'

class HinosController {
  async get () {
    try {
      showLoading()
      const response = await hinosService.get()
      if (response !== null) {
        hideLoading()
        if (response.status === 200) {
          return response.data
        } else {
          errorMessage('Erro ao buscar')
          return null
        }
      } else {
        hideLoading()
        errorMessage('Erro ao carregar hinos')
        return null
      }
    } catch (error) {
      hideLoading()
      errorMessage(exceptions(error))
      return null
    }
  }

  async getById (id) {
    try {
      showLoading()
      const response = await hinosService.getById(id)
      if (response !== null) {
        hideLoading()
        if (response.status === 200) {
          return response.data
        } else {
          errorMessage('Erro ao buscar')
          return null
        }
      } else {
        hideLoading()
        errorMessage('Erro ao carregar hinos')
        return null
      }
    } catch (error) {
      hideLoading()
      errorMessage(exceptions(error))
      return null
    }
  }
}

export default new HinosController()
