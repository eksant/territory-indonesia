'use strict'

const util = require('./util')
const province = require('./province')
const regencyList = require('../data/regencies.json')

// regency
const regency = {
  getAllRegencies: async () => {
    const regencies = regencyList.map(regency => {
      return { ...regency, name: util.uCase(regency.name) }
    })
    return regencies
  },

  getRegencyById: async id => {
    if (!id) return {}
    const regency = regencyList.filter(regency => regency.id === id)
    return util.normalizeName(regency)
  },

  getRegencyByName: async name => {
    if (!name) return {}
    const regency = regencyList.filter(regency => regency.name.toLowerCase() === name.toLowerCase())
    return util.normalizeName(regency)
  },

  getRegenciesOfProvince: async provinceId => {
    if (!provinceId) return []
    const regencies = regencyList
      .filter(regency => regency.province_id === provinceId)
      .map(regency => {
        return { ...regency, name: util.uCase(regency.name) }
      })
    return regencies
  },

  getRegenciesOfProvinceId: async provinceId => {
    return await regency.getRegenciesOfProvince(provinceId)
  },

  getRegenciesOfProvinceName: async provinceName => {
    if (!provinceName) return []
    const provinces = await province.getProvinceByName(provinceName)
    return await regency.getRegenciesOfProvinceId(provinces.id)
  },
}

module.exports = regency
