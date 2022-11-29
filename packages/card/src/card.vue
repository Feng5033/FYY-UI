<template>
  <div :class="['fy-card', shadow + '-shadow']">
    <div class="fy-card__header" :style="bodyStyle" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="fy-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FyCard',
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
</script>

<style lang="scss" scoped>
.fy-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;

  &__header {
    padding: 20px;
    border-bottom: 1px solid #ebeef5;
  }

  &__body {
    padding: 20px;
  }

  &.always-shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  &.hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
