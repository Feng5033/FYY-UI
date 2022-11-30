<template>
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
</template>

<script>
export default {
  name: 'FyButton',
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
</script>

<style lang="scss" scoped>
.fy-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover {
      color: #fff;
      background: #66b1ff;
      border-color: #66b1ff;
    }
  }

  &--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }

    &.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
      }
    }
  }

  &--text {
    background: none;
    border: none;
  }

  &.is-round {
    border-radius: 20px;
  }

  &.is-disabled,
  &.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }

  &.mini {
    font-size: 6px;
    padding: 6px 10px;
  }

  &:hover,
  &:active {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.fy-button + .fy-button {
  margin-left: 10px;
}
</style>
