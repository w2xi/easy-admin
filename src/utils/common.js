/**
 * 获取数组的一列
 * @param {Array} value
 * @param {String} on
 * @returns {Array}
 * @example
 *
 * arrayColumn([{name: '小明'}, {name: '花花'}], 'name')
 *
 * => // ['小明', '花花']
 */
export function arrayColumn(value, on = 'id') {
  return value.map((item) => item[on])
}

/**
 * 树形数据转换
 * @param {Array} data
 * @param {String} id
 * @param {String} pid
 * @returns {Array}
 */
export function treeDataTranslate(data, id = 'id', pid = 'parentId') {
  var res = []
  var temp = {}
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i]
  }
  for (var k = 0; k < data.length; k++) {
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]['children']) {
        temp[data[k][pid]]['children'] = []
      }
      if (!temp[data[k][pid]]['_level']) {
        temp[data[k][pid]]['_level'] = 1
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1
      temp[data[k][pid]]['children'].push(data[k])
    } else {
      res.push(data[k])
    }
  }
  return res
}

/**
 * Generate a function to sort array by the given field
 * @param {String} on
 * @param {String} order asc:升序 desc:降序
 * @returns {Function}
 */
export function buildSorter(on, order = 'asc') {
  return (a, b) => {
    order = order === 'asc' ? 1 : -1

    return order * (a[on] - b[on])
  }
}

/**
 * 数组转对象
 * @param {Array} arr
 * @param {String} on
 * @returns {Object}
 * @example
 *
 * const arr = [{id: 1, name: '小明'}, {id: 2, name: '小红'}]
 *
 * arr2Obj(arr, 'id')
 * // => {1: {id: 1, name: '小明'}, 2: {id: 2, name: '小红'}}
 */
export function arr2Obj(arr, on) {
  return arr.reduce((obj, item) => {
    obj[item[on]] = item
    return obj
  }, {})
}

export function toTree(data, id = 'id', parentId = 'parent_id') {
  const obj = {}, result = []

  data.forEach((item) => {
    obj[item[id]] = item
  })

  data.forEach((item) => {
    const parent = obj[item[parentId]]

    if (parent) {
      // type = 1 表示菜单
      item.type === 1 && (parent.list || (parent.list = [])).push(item)
    } else {
      // root node
      result.push(item)
    }
  })

  return result
}
