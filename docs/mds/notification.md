# Notification 通知
悬浮出现在页面角落，显示全局的通知提醒消息。

### 基本用法
适用性广泛的通知栏

<fy-button v-on:click="notifyAutoClose">可自动关闭</fy-button>
<fy-button v-on:click="notifyNoClose">不会自动关闭</fy-button>

Notification 组件提供通知功能，Element 注册了$notify方法，接收一个options字面量参数，在最简单的情况下，你可以设置title字段和message字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置duration，可以控制关闭的时间间隔，特别的是，如果设置为0，则不会自动关闭。注意：duration接收一个Number，单位为毫秒，默认为4500。

```html
<fy-button v-on:click="notifyAutoClose">可自动关闭</fy-button>
<fy-button v-on:click="notifyNoClose">不会自动关闭</fy-button>
```
```js
notifyAutoClose () {
  this.$notify({
    title: '提示',
    message: '这是一条自动关闭啊实打实大苏打阿三打撒的消息',
  })
},
notifyNoClose () {
  this.$notify({
    title: '提示',
    message: '这是一条不自动关闭啊实打实大苏打阿三打撒的消息',
    duration: 0
  })
},
```