const jsonp = (url, data) => {
  const requestUrl = `${url}?${formataData(data)}`
  const script = document.createElement('script')
  script.src = requestUrl
  document.body.appendChild(script)
  return new Promise((resolve, reject) => {
    window[callback] = (data) => {
      try {
        resolve(data)
      } catch (error) {
        reject(data)
      }
    }
  })
}

let data = {
  a: 1,
  b: 2
}
// function formataData (data) {
//   let str = ''
//   const keys = Object.keys(data)
//   keys.forEach((item) => {
//     str += `${item}=${data[item]}&`
//   })
//   return str.slice(0, str.length - 1)
// }

function formataData (data) {
  const arr = []
  for (let key in data) {
    arr.push(`${key}=${data[key]}`)
  }
  return arr.join('&')
}

console.log(formataData(data))

