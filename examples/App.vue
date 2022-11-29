<template>
  <div id="app">
    <div class="button">
      <fy-button>默认按钮</fy-button>
      <fy-button type="danger">危险按钮</fy-button>
      <fy-button type="danger" plain>镂空</fy-button>
      <fy-button disabled>禁用</fy-button>
      <fy-button type="text">文字按钮</fy-button>
      <fy-button round>圆角按钮</fy-button>
      <fy-button size="mini">按钮尺寸</fy-button>
    </div>
    <br />
    <div class="radio">
      <fy-radio v-model="radio" label="1">男生</fy-radio>
      <fy-radio v-model="radio" label="2">女生</fy-radio>
    </div>
    <br />
    <div class="card">
      <fy-card class="box-card" shadow="hover">
        <template #header>
          <div>1</div>
        </template>
        <div v-for="(item, index) in 4" :key="index">{{ item }}</div>
      </fy-card>
    </div>
    <br />
    <div class="breadcrumb">
      <fy-breadcrumb>
        <fy-breadcrumb-item :to="{ path: '/home' }">首页</fy-breadcrumb-item>
        <fy-breadcrumb-item><a>活动管理</a></fy-breadcrumb-item>
        <fy-breadcrumb-item>活动列表</fy-breadcrumb-item>
      </fy-breadcrumb>
    </div>
    <br />
    <div class="message">
      <fy-button @click="getMessage('success')">成功提示</fy-button>
      <fy-button @click="getMessage('error')">失败提示</fy-button>
    </div>
    <br />
    <div class="message-box">
      <fy-button @click="getAlert">消息弹框</fy-button>
      <fy-button @click="getConfirm">确认消息弹框</fy-button>
    </div>
    <br />
    <div class="notification">
      <fy-button @click="getNotify(4500)">通知弹框</fy-button>
      <fy-button @click="getNotify(0)">不自动关闭</fy-button>
    </div>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      radio: 1
    }
  },
  methods: {
    getMessage (type) {
      this.$message({ message: '这是一条消息提示', type: type })
    },
    getAlert () {
      this.$alert('aaa', 'bbb', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'success',
            message: `action: ${action}`
          })
        }
      })
    },
    getConfirm () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    getNotify (duration) {
      this.$notify({
        title: '提示',
        message: '这是一条自动关闭啊实打实大苏打阿三打撒的消息',
        duration
      })
    }
  }
}
</script>

<style lang="scss">
.box-card {
  width: 480px;
}

a {
  text-decoration: unset;
}
</style>
