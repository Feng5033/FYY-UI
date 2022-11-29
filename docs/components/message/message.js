const message = {
  template: `
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
`,
  props: {
    count: {
      type: Number
    },
    messageCutCount: {
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
      this.messageCutCount()
      // 然后移除dom
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
