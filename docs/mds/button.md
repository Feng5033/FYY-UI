# Button 按钮

<fy-button>默认按钮</fy-button>
<fy-button type="danger">危险按钮</fy-button>
<fy-button type="danger" plain>镂空</fy-button>
<fy-button disabled>禁用</fy-button>
<fy-button type="text">文字按钮</fy-button>
<fy-button round>圆角按钮</fy-button>
<fy-button size="mini">按钮尺寸</fy-button>

```html
<fy-button>默认按钮</fy-button>
<fy-button type="danger">危险按钮</fy-button>
<fy-button type="danger" plain>镂空</fy-button>
<fy-button disabled>禁用</fy-button>
<fy-button type="text">文字按钮</fy-button>
<fy-button round>圆角按钮</fy-button>
<fy-button size="mini">按钮尺寸</fy-button>
```
### Attributes

| 参数     | 说明     | 类型    | 可选值                             | 默认值  |
| -------- | -------- | ------- | ---------------------------------- | :-----: |
| type     | 类型     | string  | primary / success  / danger / text | primary |
| size     | 尺寸     | string  | mini                               |   --    |
| disabled | 是否禁用 | boolean | --                                 |  false  |
| plain    | 是否镂空 | boolean | --                                 |  false  |
| round    | 是否圆角 | boolean | --                                 |  false  |