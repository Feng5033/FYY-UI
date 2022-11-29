<script>
export default {
  name: 'FyBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  render (h) {
    const slots = this.$slots.default
    const ChangeSlots = []
    slots.forEach((item, index) => {
      ChangeSlots.push(item)
      if (index < slots.length - 1) {
        ChangeSlots.push(h('span', { class: 'separator' }, this.separator))
      }
    })
    return h('div', { class: 'fy-breadcrumb' }, ChangeSlots)
  }
}
</script>

<style lang="scss" scoped>
.fy-breadcrumb {
  font-size: 14px;
  .separator {
    margin: 0 10px;
  }
}
</style>
