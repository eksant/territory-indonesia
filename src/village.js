'use strict'

const util = require('./util')
const district = require('./district')
const villageList = require('../data/villages.json')

// village
const village = {
  getAllVillages: async () => {
    const villages = await villageList.map(village => {
      return { ...village, name: util.uCase(village.name) }
    })
    return villages
  },

  getVillageById: async id => {
    if (!id) return {}
    const village = await villageList.filter(village => village.id === id)
    return util.normalizeName(village)
  },

  getVillageByName: async name => {
    if (!name) return {}
    const village = await villageList.filter(village => village.name.toLowerCase() === name.toLowerCase())
    return util.normalizeName(village)
  },

  getVillagesOfDistrict: async districtId => {
    if (!districtId) return []
    const villages = await villageList
      .filter(village => village.district_id === districtId)
      .map(village => {
        return { ...village, name: util.uCase(village.name) }
      })
    return villages
  },

  getVillagesOfDistrictId: async districtId => {
    return await village.getVillagesOfDistrict(districtId)
  },

  getVillagesOfDistrictName: async districtName => {
    if (!districtName) return []
    const districts = await district.getDistrictByName(districtName)
    return await village.getVillagesOfDistrictId(districts.id)
  },
}

module.exports = village
