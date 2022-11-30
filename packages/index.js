import button from './button'
import radio from './radio'
import card from './card'
import { breadcrumb, breadcrumbItem } from './breadcrumb'
import message from './message'
import { alert, confirm } from './messageBox'
import notification from './notification'
const components = [
  button,
  radio,
  card,
  breadcrumb,
  breadcrumbItem
]

const install = (Vue) => {
  if (install.installed) return
  components.map(item => {
    return Vue.component(item.name, item)
  })

  Vue.prototype.$message = message
  Vue.prototype.$alert = alert
  Vue.prototype.$confirm = confirm
  Vue.prototype.$notify = notification
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export const Button = button.install
export const Radio = radio.install
export const Card = card.install
export const Breadcrumb = breadcrumb.install
export const BreadcrumbItem = breadcrumbItem.install
export const Message = message
export const Alert = alert
export const Confirm = confirm
export const Notification = notification

export default {
  install
}
