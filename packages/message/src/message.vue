<template>
  <transition name="fy-message-fade" @after-leave="handleAfterLeave">
    <div
      :class="['fy-message', 'fy-message--' + type, center ? 'isCenter' : '']"
      :style="controlTop"
      v-show="isShowMessage"
      @mouseenter="clearTimerFn"
      @mouseleave="startTimerFn"
    >
      <span>{{ type }} {{ message }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Fy-message',
  props: {
    count: {
      type: Number
    },
    cutCount: {
      type: Function
    }
  },
  data () {
    return {
      type: 'info',
      message: '',
      center: false, // 是否局居中
      timer: null,
      duration: 3000,
      isShowMessage: false
    }
  },
  computed: {
    controlTop () {
      return {
        top: `${10 + (this.count - 1) * 60}px`
      }
    }
  },
  mounted () {
    this.startTimerFn() // 开启定时器，默认3秒后销毁组件
  },
  methods: {
    startTimerFn () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.isShowMessage = false // 达到计时时间，就隐藏这个notice
        }, this.duration)
      }
    },
    clearTimerFn () {
      clearTimeout(this.timer)
    },
    handleAfterLeave () {
      // 在移除一个dom之前，要先通知外界的计数count减去一个，并让余下的所有dom都往上移动，即更改位置
      this.cutCount()
      // 然后移除dom
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>

<style lang="scss" scoped>
.fy-message {
  min-width: 380px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #edf2fc;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  font-size: 14px;

  //成功提示样式
  &--success {
    color: #67c23a;
    background-color: #f0f9eb;
  }
  // 警告提示样式
  &--warning {
    color: #e6a23c;
    background-color: #fdf6ec;
  }
  // 错误提示样式
  &--error {
    color: #f56c6c;
    background-color: #fef0f0;
  }
}

.isCenter {
  justify-content: center;
}

.fy-message-fade-enter,
.fy-message-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
}
</style>
