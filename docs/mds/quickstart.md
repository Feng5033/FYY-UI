# 快速上手
本节将介绍如何在项目中使用 Fyy。

### 引入 Fyy
你可以引入整个 Fyy，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Fyy。

完整引入

在 main.js 中写入以下内容：
```js
  import Vue from 'vue';
  import FYyUI from 'fyy-ui';
  import 'fyy-ui/lib/fyy-ui.css'
  import App from './App.vue';

  Vue.use(FYyUI);

  new Vue({
    el: '#app',
    render: h => h(App)
  });
```

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import { Button, Card } from 'fyy-ui';
import App from './App.vue';

Vue.use(Button)
Vue.use(Card)

new Vue({
  el: '#app',
  render: h => h(App)
});
```