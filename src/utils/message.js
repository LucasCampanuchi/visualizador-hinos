
import { Dialog, Notify } from 'quasar'

export const alert = (message, title = 'Atenção') => {
  Dialog.create({
    title,
    message
  })
}

export const confirmDialog = (title = 'Atenção', message, func) => {
  Dialog.create({
    title,
    message,
    cancel: true
  }).onOk(func).onCancel(() => {})
}

export const message = (message) => {
  const { messageInfo, color, icon } = message

  Notify.create({
    message: messageInfo,
    color,
    icon
  })
}

export const errorMessage = (message) => {
  Notify.create({
    message,
    color: 'negative',
    icon: 'close'
  })
}

export const positiveMessage = (message) => {
  Notify.create({
    message,
    color: 'positive',
    icon: 'check'
  })
}

export const prompt = (func) => {
  Dialog.create({
    title: 'Attention',
    message: 'Whats is the Event #?',
    prompt: {
      model: '',
      isValid: val => val.length > 2,
      type: 'text' // optional
    },
    cancel: true,
    persistent: true
  }).onOk(func)
    .onCancel(() => {})
}
