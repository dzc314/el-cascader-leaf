# el-cascader-leaf
## 说明
el-cascader-leaf是一个级联单项选择框，依赖于element-ui的el-cascader级联组件，本组件最大亮点是对选中的叶子节点进行双向数据绑定。
有些时候我们只需要用到叶子节点的值，而el-cascader需要传选中节点及其父节点的值才能匹配上叶子节点，el-cascader-leaf可完美解决此痛点，快来试试吧。

## 通过NPM安装
```
npm i @dzc314/el-cascader-leaf -S
```

### 引入组件
```
import '@dzc314/el-cascader-leaf'
```

### 使用
```
<template>
  <el-cascader-leaf 
    v-model="value" // 绑定选中末节点的值 
    :options="options" // 树结构选项数据
    :props="props" 
    @change="changeHandle" 
  ></el-cascader-leaf>
</template>
<script>
export default{
  data() {
    return {
      value: 4, // 双向数据绑定的值
      props: {
        value: 'id',  // 设置取值的key, 默认值为'value'
        label: 'label', // 显示文本, 默认值为'label'
        parentKey: 'parent', // 设置父值key, 根据options的数据结构自行定义, 默认值为'parentId'
        children: 'children', // 树结构中子集的key, 默认值为'children'
      },
      options: [
        {
          id: 1,
          parent: null,
          label: '一级1',
          children: [
            {
              id: 2,
              parent: 1,
              label: '一级1.1',
              children: [
                {
                  id: 3,
                  parent: 2,
                  label: '一级1.1.1',
                },
                {
                  id: 4,
                  parent: 2,
                  label: '一级1.1.2',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    changeHandle(value, selections) {
      // value [String, Number] 选中末节点的值
      // selections [Array] 选中节点及其所有父节点的对象级数组
      console.log(selections);
    }
  }
}
</script>
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
