import Vue from 'vue'
import NotificationComponent from './src/notification'

const NotificationConstructor = Vue.extend(NotificationComponent)
let offsetHeight = 0
const Notification = function (options) {
  const instance = new NotificationConstructor({
    propsData: {
      offsetHeight: offsetHeight + 16,
      cutCount
    },
    data: options
  })
  instance.$mount()
  document.body.appendChild(instance.$el)

  this.$nextTick(() => {
    offsetHeight += instance.$el.offsetHeight + 16
  })

  return instance
}

const cutCount = function () {
  const notifyList = document.querySelectorAll('.fy-notification')
  let resetOffsetHeight = 0
  for (let i = 0; i < notifyList.length; i++) {
    const dom = notifyList[i]
    dom.style.top = `${16 + resetOffsetHeight}px`
    resetOffsetHeight += dom.offsetHeight + 16
  }
  offsetHeight = resetOffsetHeight
}
export default Notification
