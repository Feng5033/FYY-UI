<template>
  <transition name="fy-notification-fade" @after-leave="handleAfterLeave">
    <div
      :class="['fy-notification', position]"
      :style="styleTop"
      v-show="isShowNotify"
    >
      <div class="fy-notification__header">
        <span>{{ title }}</span>
        <span class="close" @click="handleAfterLeave">x</span>
      </div>
      <div class="fy-notification__content">
        {{ message }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FyNotification',
  props: {
    offsetHeight: {
      type: Number
    },
    cutCount: {
      type: Function
    }
  },
  computed: {
    styleTop () {
      return {
        top: `${this.offsetHeight}px`
      }
    }
  },
  data () {
    return {
      title: '',
      message: '',
      position: 'right',
      duration: 4500,
      isShowNotify: false
    }
  },
  mounted () {
    this.isShowNotify = true
    this.startTimerFn()
  },
  methods: {
    startTimerFn () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.isShowNotify = false
        }, this.duration)
      }
    },
    handleAfterLeave () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
      this.cutCount()
    }
  }
}
</script>

<style lang="scss" scoped>
.fy-notification {
  width: 330px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s,
    bottom 0.3s;
  overflow: hidden;
  z-index: 2003;

  &__header {
    display: flex;
    justify-content: space-between;
    font-weight: 700;

    .close {
      cursor: pointer;
    }
  }

  &__content {
    margin-top: 10px;
  }

  &.right {
    right: 16px;
  }
}

.fy-notification-fade-enter-active,
.fy-notification-fade-leave {
  opacity: 1;
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.fy-notification-fade-enter,
.fy-notification-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
</style>
