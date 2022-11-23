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
