const MessageConstructor = Vue.extend(message)

let count = 0

const Message = function (options) {
  let instance
  count = count + 1
  if (typeof options === 'object') {
    instance = new MessageConstructor({
      data: options,
      propsData: {
        count,
        messageCutCount
      }
    })
  } else {
    instance = new MessageConstructor({
      propsData: {
        count,
        messageCutCount
      }
    })
    instance.message = options
  }
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.isShowMessage = true
  return instance
}

function messageCutCount () {
  count = count - 1
  const messageList = document.querySelectorAll('.fy-message')
  for (let i = 0; i < messageList.length; i++) {
    const dom = messageList[i]
    // 上移60px
    dom.style.top = parseInt(dom.style.top) - 60 + 'px'
  }
}

Vue.prototype.$message = Message
