import Vue from 'vue'
import messageBoxComponent from './src/messageBox'
import modalComponent from './src/modal'

const MessageBoxConstructor = Vue.extend(messageBoxComponent)
const Modal = Vue.extend(modalComponent)
const modal = new Modal()
modal.$mount()

const alert = function (content, title, options) {
  const instance = new MessageBoxConstructor({
    data: {
      title,
      content,
      ...options,
      confirmCallBack: options.callback,
      modal: modal.$el,
      closeOnClickModal: false
    }
  })

  instance.$mount()
  document.body.appendChild(instance.$el)

  document.body.appendChild(modal.$el)

  return instance
}

const confirm = function (content, title, options) {
  return new Promise((resolve, reject) => {
    const instance = new MessageBoxConstructor({
      data: {
        title,
        content,
        ...options,
        modal: modal.$el,
        confirmCallBack: resolve,
        cancelCallBack: reject
      }
    })
    instance.$mount()
    document.body.appendChild(instance.$el)

    document.body.appendChild(modal.$el)
  })
}

export {
  alert,
  confirm
}
