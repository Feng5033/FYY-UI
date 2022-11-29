# MessageBox 弹框
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

```
从场景上说，MessageBox 的作用是美化系统自带的 alert、confirm。
```

### 消息提示
当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

<fy-button v-on:click="getAlert">消息弹框</fy-button>

### 确认消息
提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

<fy-button v-on:click="getConfirm">确认消息弹框</fy-button>

```html
<fy-button v-on:click="getAlert">消息弹框</fy-button>
<fy-button v-on:click="getConfirm">确认消息弹框</fy-button>
```
```js
  getAlert () {
    this.$alert('标题', '内容', {
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
```

### 全局方法
Fyy 为 Vue.prototype 添加了全局方法 $alert，$confirm。因此在 vue instance 中可以采用本页面中的方式调用。

### Options
| 参数              | 说明                    | 类型     | 可选值                           | 默认值 |
| ----------------- | ----------------------- | -------- | -------------------------------- | :----: |
| title             | MessageBox 标题         | string   | --                               |   --   |
| message           | MessageBox 消息正文内容 | string   | --                               |   --   |
| type              | 消息类型，用于显示图标  | string   | success / info / warning / error |   --   |
| callback          | MessageBox 关闭后的回调 | function | --                               |   --   |
| cancelButtonText  | 取消按钮的文本内容      | string   | --                               |  取消  |
| confirmButtonText | 确定按钮的文本内容      | string   | --                               |  确定  |