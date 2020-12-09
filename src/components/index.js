import Vue from "vue";
import ElCascaderLeaf from "./ElCascaderLeaf.vue";

const Components = {
  ElCascaderLeaf
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;