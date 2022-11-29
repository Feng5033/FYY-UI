const NotificationConstructor = Vue.extend(notification)
let offsetHeight = 0
const Notification = function (options) {
  const instance = new NotificationConstructor({
    propsData: {
      offsetHeight: offsetHeight + 16,
      notifyCutCount
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

const notifyCutCount = function () {
  const notifyList = document.querySelectorAll('.fy-notification')
  let resetOffsetHeight = 0
  for (let i = 0; i < notifyList.length; i++) {
    const dom = notifyList[i]
    dom.style.top = `${16 + resetOffsetHeight}px`
    resetOffsetHeight += dom.offsetHeight + 16
  }
  offsetHeight = resetOffsetHeight
}
Vue.prototype.$notify = Notification
