const throtte = (fn, wiat) => {
  let timer = null
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fun.apply(this, arguments)
      }, wiat)
    }
  }
}