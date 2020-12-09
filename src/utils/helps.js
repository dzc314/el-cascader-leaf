function treeToArray(tree, childrenKey) {
  let arr = []

  function getChildren(tree, childrenKey) {
    tree.forEach(item => {
      arr.push(item)
      const children = item[childrenKey]
      if (children && children.length) {
        getChildren(children, childrenKey)
      }
    })
  }
  getChildren(tree, childrenKey)
  return arr
}
const find = (arr, valueKey, value) => {
  const len = arr.length
  if (!len) {
    return false
  }
  for (let i = 0; i < len; i++) {
    const item = arr[i]
    if (item[valueKey] === value) {
      return item
    }
  }
}
export {
  treeToArray,
  find,
}
export default {
  treeToArray,
  find,
}