import Vue from 'vue'
import MessageComponent from './src/message'
const MessageConstructor = Vue.extend(MessageComponent)

let count = 0

const Message = function (options) {
  let instance
  count = count + 1
  if (typeof options === 'object') {
    instance = new MessageConstructor({
      data: options,
      propsData: {
        count,
        cutCount
      }
    })
  } else {
    instance = new MessageConstructor({
      propsData: {
        count,
        cutCount
      }
    })
    instance.message = options
  }
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.isShowMessage = true
  return instance
}

function cutCount () {
  count = count - 1
  const messageList = document.querySelectorAll('.fy-message')
  for (let i = 0; i < messageList.length; i++) {
    const dom = messageList[i]
    // 上移60px
    dom.style.top = parseInt(dom.style.top) - 60 + 'px'
  }
}

export default Message
