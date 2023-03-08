const debounce = (fn, await) => {
  let timer = null
  return () => {
    clearTimeout(time)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, await)
  }
}
