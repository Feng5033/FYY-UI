const messageBox = {
  template: `
  <div class="fy-message-box__wrapper" @click="getName">
    <div class="fy-message-box">
      <div class="fy-message-box__header">
        <span class="title">{{ title }}</span>
        <span class="close" @click="cancel('cancel')" v-if="cancelCallBack"
          >x</span
        >
        <span class="close" @click="confirm('cancel')" v-else>x</span>
      </div>
      <div class="fy-message-box__content">
        <div>
          <span v-if="type">{{ type }}</span>
          <span>
            {{ content }}
          </span>
        </div>
      </div>
      <div class="fy-message-box__btns">
        <fy-button
          size="mini"
          @click="cancel('cancel')"
          v-if="cancelCallBack"
          >{{ cancelButtonText }}</fy-button
        >
        <fy-button type="primary" size="mini" @click="confirm('confirm')">{{
          confirmButtonText
        }}</fy-button>
      </div>
    </div>
  </div>
`,
  data () {
    return {
      modal: '',
      type: '',
      title: '',
      content: '',
      confirmCallBack: null,
      cancelCallBack: null,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      closeOnClickModal: true // 点击遮罩是否关闭弹窗
    }
  },
  mounted () {
    document.onkeydown = (e) => {
      if (e.key === 'Escape' && this.closeOnClickModal) {
        this.cancel('cancel')
      }
    }
  },
  methods: {
    getName (el) {
      if (el.target.className === 'fy-message-box__wrapper' && this.closeOnClickModal) {
        this.cancel('cancel')
      }
    },
    confirm (message) {
      this.confirmCallBack(message) // 触发回调
      this.destory()
    },
    cancel (message) {
      this.cancelCallBack(message)
      this.destory()
    },
    destory () {
      this.$destroy(true) // 销毁组件
      this.$el.parentNode.removeChild(this.$el)
      this.modal.parentNode.removeChild(this.modal) // 手动卸载遮罩层
    },
    modalClick () {
      if (this.closeOnClickModal) {
        this.destory()
      }
    }
  }
}

const modalBox = {
  template: `
  <div class="v-modal"></div>
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
