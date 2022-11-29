<template>
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
</template>

<script>
export default {
  name: 'FyRadio',
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
</script>

<style lang="scss" scoped>
.fy-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .fy-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }

    &.is-checked {
      .fy-radio__inner {
        border-color: #409eff;
        background: #409eff;

        &::after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }

    .fy-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  &__label {
    padding-left: 6px;
  }

  &.is-checked {
    .fy-radio__label {
      color: #409eff;
    }
  }
}
</style>
