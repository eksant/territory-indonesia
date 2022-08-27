'use strict'

const util = {
  uCase: str => {
    return str.replace(/\w\S*/g, txt => {
      const exceptTxt = txt === 'DKI' || txt === 'DI' ? txt : txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      return exceptTxt
    })
  },

  arrObj: arr => {
    return Array.isArray(arr) ? arr[0] : arr
  },

  normalizeName: data => {
    const value = util.arrObj(data)
    return { ...value, name: util.uCase(value.name) }
  },
}

module.exports = util
