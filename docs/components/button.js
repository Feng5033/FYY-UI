const button = {
  template: `
  <button
  @click="$emit('click')"
  :class="[
    'fy-button',
    'fy-button--' + type,
    plain ? 'is-plain' : '',
    disabled ? 'is-disabled' : '',
    round ? 'is-round' : '',
    size,
  ]"
  :disabled="disabled"
>
  <slot></slot>
</button>
`,
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null
    }
  }
}
