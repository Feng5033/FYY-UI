const MessageBoxConstructor = Vue.extend(messageBox)
const Modal = Vue.extend(modalBox)
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

Vue.prototype.$alert = alert
Vue.prototype.$confirm = confirm
