import button from './button'

const components = [
  button
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
