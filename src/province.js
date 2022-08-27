'use strict'

const util = require('./util')
const provinceList = require('../data/provinces.json')

// province
const province = {
  getAllProvinces: async () => {
    const provinces = provinceList.map(province => {
      return { ...province, name: util.uCase(province.name) }
    })
    return provinces
  },

  getProvinceById: async id => {
    if (!id) return {}
    const province = provinceList.filter(province => province.id === id)
    return util.normalizeName(province)
  },

  getProvinceByName: async name => {
    if (!name) return {}
    const province = provinceList.filter(province => province.name.toLowerCase() === name.toLowerCase())
    return util.normalizeName(province)
  },
}

module.exports = province
