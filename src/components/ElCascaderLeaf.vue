<template>
  <el-cascader
    v-model="values"
    :options="options"
    :props="defaultProps"
    clearable
    :disabled="disabled"
    @change="changeHandler"
    :placeholder="placeholder"
  ></el-cascader>
</template>

<script>
import { treeToArray, find } from '@/utils/helps'
export default {
  name: 'ElCascaderLeaf',
  props: {
    vModel: {
      type: [String, Number],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    props: {
      type: Object,
      default: () => ({
        label: 'label',
        value: 'value',
        parentKey: 'parentId',
        children: 'children',
      }),
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
  },
  data() {
    return {
      defaultProps: {
        label: 'label',
        value: 'value',
        parentKey: 'parentId',
        children: 'children',
      },
      values: [],
      optionsArray: []
    }
  },
  watch: {
    options: {
      handler: function (newVal) {
        // console.log(newVal)
        if (newVal.length) {
          setTimeout(this.initValues)
        }
      },
      deep: true,
    },
    vModel: {
      handler: function (newVal) {
        if (newVal) {
          setTimeout(this.initValues)
        }
      },
    },
  },
  model: {
    prop: 'vModel',
    event: 'change',
  },
  beforeMount() {
    this.initProps()
  },
  mounted() {
    this.initValues()
  },
  methods: {
    initProps() {
      Object.assign(this.defaultProps, this.props)
    },
    initValues() {
      // console.log(this.props);
      if (!this.options.length) {
        return
      }
      const { value, parentKey, children } = this.defaultProps
      const family = this.getFamily(
        this.options,
        parentKey,
        children,
        value,
        this.vModel
      )
      this.values = family.map((item) => item[value])
    },
    getFamily(tree, parentKey, children, valueKey, nodeValue) {
      const family = []
      if (!tree.length) {
        return family
      }
      const arr = treeToArray(this.options, children)
      this.optionsArray = arr
      const endChild = find(arr, valueKey, nodeValue)
      if (!endChild) {
        return family
      }
      family.unshift(endChild)

      function getParent(parentValue) {
        const parent = find(arr, valueKey, parentValue)
        if (parent) {
          family.unshift(parent)
          if (parent[parentKey]) {
            getParent(parent[parentKey])
          }
        }
      }
      endChild[parentKey] && getParent(endChild[parentKey])
      return family
    },
    changeHandler() {
      // console.log(this.values)
      let selections = []
      if(this.values.length){
        selections = this.values.map(value => {
          return find(this.optionsArray, this.props.value, value)
        })
      }
      const len = this.values.length
      this.$emit('change', this.values[len - 1], selections)
    },
  },
}
</script>

<style>
</style>