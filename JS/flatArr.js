const arr = [1, 2, [3, 4], [5, 6, [7, 8]]]

const flat = (arr, initVal) => {
  const startVal = initVal || []
  return arr.reduce((pre, item) => {
    if (Array.isArray(item)) {
      return flat(item, pre)
    } else {
      return pre.concat(item)
    }
  }, startVal)
}

console.log(flat(arr))