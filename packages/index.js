import button from './button'
import radio from './radio'
import card from './card'
import * as breadcrumb from './breadcrumb'
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
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
