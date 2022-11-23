<template>
  <span class="fy-breadcrumb-item">
    <router-link v-if="to" :to="to">
      <slot></slot>
    </router-link>
    <slot v-else></slot>
  </span>
</template>

<script>
export default {
  name: 'FyBreadcrumbItem',
  props: {
    to: {
      type: [String, Object]
    }
  }
}
</script>

<style lang="scss" scoped>
.fy-breadcrumb-item {
  a {
    font-weight: 700;
    color: #303133;
    cursor: pointer;

    &:hover {
      color: #409eff;
      transition: color ease-in-out 0.2s;
    }
  }
}
</style>
