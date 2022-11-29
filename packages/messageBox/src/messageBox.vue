<template>
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
</template>

<script>
export default {
  name: 'FyMessageBox',
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
</script>

<style lang="scss" scoped>
.fy-message-box__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2022;
  text-align: center;

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }
}
.fy-message-box {
  display: inline-block;
  width: 420px;
  padding-bottom: 10px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  font-size: 18px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;

  &__header {
    position: relative;
    padding: 15px 15px 10px;
    display: flex;
    justify-content: space-between;

    .close {
      cursor: pointer;

      &:hover {
        color: #409eff;
      }
    }
  }

  &__content {
    padding: 10px 15px;
    color: #606266;
    font-size: 14px;
  }

  &__btns {
    padding: 5px 15px 0;
    text-align: right;
  }
}
</style>
