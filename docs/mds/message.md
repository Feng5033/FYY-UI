# Message 消息提示
常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

<fy-button v-on:click="getMessage('info')">打开消息提示</fy-button>
<fy-button v-on:click="getMessage('success')">成功提示</fy-button>
<fy-button type="danger" v-on:click="getMessage('error')">失败提示</fy-button>
<fy-button v-on:click="getMessageCenter('success')">文字居中</fy-button>

```html
<fy-button v-on:click="getMessage('success')">成功提示</fy-button>
<fy-button type="danger" v-on:click="getMessage('error')">失败提示</fy-button>
```
```js
  getMessage (type) {
      this.$message({ message: '这是一条消息提示',type })
  }
```

### 全局方法
Fyy 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。

### Options
| 参数    | 说明         | 类型    | 可选值                     | 默认值 |
| ------- | ------------ | ------- | -------------------------- | :----: |
| message | 消息文字     | string  | --                         |   --   |
| type    | 主题         | string  | success/warning/info/error |  info  |
| center  | 文字是否居中 | boolean | --                         | false  |