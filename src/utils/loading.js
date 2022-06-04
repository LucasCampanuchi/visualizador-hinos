import { Loading } from 'quasar'

export const showLoading = () => {
  Loading.show({
    message: 'Please wait...',
    boxClass: 'bg-grey-2 text-grey-9',
    spinnerColor: 'primary'
  })
}

export const hideLoading = () => {
  Loading.hide()
}
