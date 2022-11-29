const radio = {
  template: `
  <label
    :class="{
      'fy-radio': true,
      'is-checked': checked == label,
    }"
  >
    <span
      :class="{
        'fy-radio__input': true,
        'is-checked': checked == label,
      }"
    >
      <span class="fy-radio__inner"></span>
      <input
        type="radio"
        :value="label"
        :name="checked"
        :checked="checked == label"
        @change="$emit('change', $event.target.value)"
        class="fy-radio__original"
      />
    </span>
    <span class="fy-radio__label">
      <slot></slot>
    </span>
  </label>
`,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    label: {
      type: [String, Boolean, Number]
    },
    checked: [String, Boolean, Number]
  }
}
