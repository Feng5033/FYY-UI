import Breadcrumb from './src/breadcrumb'
import BreadcrumbItem from './src/breadcrumbItem'

Breadcrumb.install = (Vue) => {
  Vue.component(Breadcrumb.name, Breadcrumb)
}
BreadcrumbItem.install = (Vue) => {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem)
}
export {
  Breadcrumb,
  BreadcrumbItem
}
