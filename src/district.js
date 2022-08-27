'use strict'

const util = require('./util')
const regency = require('./regency')
const districtList = require('../data/districts.json')

// district
const district = {
  getAllDistricts: async () => {
    const districts = districtList.map(district => {
      return { ...district, name: util.uCase(district.name) }
    })
    return districts
  },

  getDistrictById: async id => {
    if (!id) return {}
    const district = districtList.filter(district => district.id === id)
    return util.normalizeName(district)
  },

  getDistrictByName: async name => {
    if (!name) return {}
    const district = districtList.filter(district => district.name.toLowerCase() === name.toLowerCase())
    return util.normalizeName(district)
  },

  getDistrictsOfRegency: async regencyId => {
    if (!regencyId) return []
    const districts = districtList
      .filter(district => district.regency_id === regencyId)
      .map(district => {
        return { ...district, name: util.uCase(district.name) }
      })
    return districts
  },

  getDistrictsOfRegencyId: async regencyId => {
    return await district.getDistrictsOfRegency(regencyId)
  },

  getDistrictsOfRegencyName: async regencyName => {
    if (!regencyName) return []
    const regencies = await regency.getRegencyByName(regencyName)
    return await district.getDistrictsOfRegencyId(regencies.id)
  },
}

module.exports = district
