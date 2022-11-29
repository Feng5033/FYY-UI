const card = {
  template: `
  <div :class="['fy-card', shadow + '-shadow']">
  <div class="fy-card__header" :style="bodyStyle" v-if="$slots.header">
    <slot name="header"></slot>
  </div>
  <div class="fy-card__body">
    <slot></slot>
  </div>
</div>
`,
  props: {
    bodyStyle: {
      type: Object
    },
    shadow: {
      type: String,
      default: 'always'
    }
  }
}
