<template>
  <div id="app">
    <el-cascader-leaf :options="options" v-model="value" :props="props" @change="changeHandle"></el-cascader-leaf>
    <el-button @click="logValue">查看</el-button>
    <div style="width: 100px;">
      <TextTooltip
        content="Welcome to Your Vue.js + TypeScript App"
        placement="bottom"
      />
    </div>
  </div>
</template>

<script>
import 'text-tooltip'
import 'text-tooltip/dist/text-tooltip.css'
import ElCascaderLeaf from './components/ElCascaderLeaf.vue'

export default {
  name: 'App',
  components: {
    ElCascaderLeaf,
  },
  data() {
    return {
      value: 4,
      props: {
        value: 'id',
        parentKey: 'parent',
        children: 'childrens'
      },
      options: [
        {
          id: 1,
          parent: null,
          label: '一级1',
          childrens: [
            {
              id: 2,
              parent: 1,
              label: '一级1.1',
              childrens: [
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
    logValue() {
      console.log(this.value);
    },
    changeHandle(value, selections) {
      // value [String, Number] 选中末节点的值
      // selections [Array] 选中节点及其所有父节点的对象级数组
      console.log(selections);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
