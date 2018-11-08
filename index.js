'use strict'

const provinceList = require('./data/list_of_area/provinces.json')
const regencyList = require('./data/list_of_area/regencies.json')
const districtList = require('./data/list_of_area/districts.json')
const villageList = require('./data/list_of_area/villages.json')

const indonesia = {
  // provinces
  getAllProvinces: () => {
    return provinceList
  },
  getProvinceById: id => {
    return id ? provinceList.filter(province => province.id === id) : []
  },

  // regency
  getAllRegencies: () => {
    return regencyList
  },
  getRegencyById: id => {
    return id ? regencyList.filter(regency => regency.id === id) : []
  },
  getRegenciesOfProvince: provinceId => {
    return regencyList.filter(regency => regency.province_id === provinceId)
  },

  // district
  getAllDistricts: () => {
    return districtList
  },
  getDistrictById: id => {
    return id ? districtList.filter(district => district.id === id) : []
  },
  getDistrictsOfRegency: regencyId => {
    return districtList.filter(district => district.regency_id === regencyId)
  },

  // village
  getAllVillages: () => {
    return villageList
  },
  getVillageById: id => {
    return id ? villageList.filter(village => village.id === id) : []
  },
  getVillagesOfDistrict: districtId => {
    return villageList.filter(village => village.district_id === districtId)
  },
}

module.exports = indonesia
