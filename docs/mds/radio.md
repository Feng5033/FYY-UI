# Radio

<fy-radio v-model="radio" label="1">男生</fy-radio>
<fy-radio v-model="radio" label="2">女生</fy-radio>

```html
<fy-radio v-model="radio" label="1">男生</fy-radio>
<fy-radio v-model="radio" label="2">女生</fy-radio>
```

```js
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
```

### Attributes
| 参数            | 说明           | 类型                      | 可选值 | 默认值 |
| --------------- | -------------- | ------------------------- | ------ | :----: |
| value / v-model | 绑定值         | string / number / boolean | --     |
| label           | Radio 的 value | string / number / boolean | --     |   --   |