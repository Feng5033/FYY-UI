# Card 卡片
将信息聚合在卡片容器中展示。

### 基础用法
包含标题，内容和操作。

<fy-card class="box-card">
 <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <fy-button style="float: right; padding: 3px 0" type="text">操作按钮</fy-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</fy-card>

```html
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```

### 简单卡片
卡片可以只有内容区域。

<fy-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</fy-card>

```html
<el-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```

### 卡片阴影
可对阴影的显示进行配置。

<fy-card class="card-list" shadow="always">
    总是显示
</fy-card>
<fy-card class="card-list" shadow="hover">
    悬浮显示
</fy-card>
<fy-card class="card-list" shadow="never">
    不显示
</fy-card>

### Attributes

| 参数       | 说明                                         | 类型   | 可选值                 |       默认值        |
| ---------- | -------------------------------------------- | ------ | ---------------------- | :-----------------: |
| header     | 设置 header，也可以通过 slot#header 传入 DOM | string | --                     |         --          |
| body-style | 设置 body 的样式                             | object | mini                   | { padding: '20px' } |
| shadow     | 设置阴影显示时机                             | string | always / hover / never |       always        |