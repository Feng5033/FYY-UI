import button from './button'
import radio from './radio'
import card from './card'
import * as breadcrumb from './breadcrumb'
import Message from './message'
import * as MessageBox from './messageBox'
import Notification from './notification'
const components = [
  button,
  radio,
  card,
  breadcrumb.Breadcrumb,
  breadcrumb.BreadcrumbItem
]

const install = (Vue) => {
  if (install.installed) return
  components.map(item => {
    return Vue.component(item.name, item)
  })

  Vue.prototype.$message = Message
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$notify = Notification
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
