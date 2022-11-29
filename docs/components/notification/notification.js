const notification = {
  template: `
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
`,
  props: {
    offsetHeight: {
      type: Number
    },
    notifyCutCount: {
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
    notify () {
      alert(1)
    },
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
      this.notifyCutCount()
    }
  }
}
