'use strict'

const provinceList = require('./data/list_of_area/provinces.json')
const regencyList = require('./data/list_of_area/regencies.json')
const districtList = require('./data/list_of_area/districts.json')
const villageList = require('./data/list_of_area/villages.json')

function uCase(str) {
  return str.replace(/\w\S*/g, txt => {
    const exceptTxt = txt === 'DKI' || txt === 'DI' ? txt : txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    return exceptTxt
  })
}

function arrObj(arr) {
  return Array.isArray(arr) ? arr[0] : arr
}

const indonesia = {
  // provinces
  getAllProvinces: async () => {
    const provinces = await provinceList.map(province => {
      province.name = uCase(province.name)
      return province
    })
    return provinces
  },
  getProvinceById: async id => {
    if (!id) return {}
    const province = await provinceList.filter(province => province.id === id)
    return arrObj(province)
  },
  getProvinceByName: async name => {
    if (!name) return {}
    const province = await provinceList.filter(province => province.name.toLowerCase() === name.toLowerCase())
    return arrObj(province)
  },

  // regency
  getAllRegencies: async () => {
    const regencies = await regencyList.map(regency => {
      regency.name = uCase(regency.name)
      return regency
    })
    return regencies
  },
  getRegencyById: async id => {
    if (!id) return {}
    const regency = await regencyList.filter(regency => regency.id === id)
    return arrObj(regency)
  },
  getRegencyByName: async name => {
    if (!name) return {}
    const regency = await regencyList.filter(regency => regency.name.toLowerCase() === name.toLowerCase())
    return arrObj(regency)
  },
  getRegenciesOfProvince: async provinceId => {
    if (!provinceId) return []
    const regencies = await regencyList
      .filter(regency => regency.province_id === provinceId)
      .map(regency => {
        regency.name = uCase(regency.name)
        return regency
      })
    return regencies
  },
  getRegenciesOfProvinceId: async provinceId => {
    return await indonesia.getRegenciesOfProvince(provinceId)
  },
  getRegenciesOfProvinceName: async provinceName => {
    if (!provinceName) return []
    const province = await indonesia.getProvinceByName(provinceName)
    return await indonesia.getRegenciesOfProvinceId(province.id)
  },

  // district
  getAllDistricts: async () => {
    const districts = await districtList.map(district => {
      district.name = uCase(district.name)
      return district
    })
    return districts
  },
  getDistrictById: async id => {
    if (!id) return {}
    const districts = await districtList.filter(district => district.id === id)
    return arrObj(districts)
  },
  getDistrictByName: async name => {
    if (!name) return {}
    const districts = await districtList.filter(district => district.name.toLowerCase() === name.toLowerCase())
    return arrObj(districts)
  },
  getDistrictsOfRegency: async regencyId => {
    if (!regencyId) return []
    const districts = await districtList
      .filter(district => district.regency_id === regencyId)
      .map(district => {
        district.name = uCase(district.name)
        return district
      })
    return districts
  },
  getDistrictsOfRegencyId: async regencyId => {
    return await indonesia.getDistrictsOfRegency(regencyId)
  },
  getDistrictsOfRegencyName: async regencyName => {
    if (!regencyName) return []
    const regency = await indonesia.getRegencyByName(regencyName)
    return await indonesia.getDistrictsOfRegencyId(regency.id)
  },

  // village
  getAllVillages: async () => {
    const villages = await villageList.map(village => {
      village.name = uCase(village.name)
      return village
    })
    return villages
  },
  getVillageById: async id => {
    if (!id) return {}
    const villages = await villageList.filter(village => village.id === id)
    return arrObj(villages)
  },
  getVillageByName: async name => {
    if (!name) return {}
    const villages = await villageList.filter(village => village.name.toLowerCase() === name.toLowerCase())
    return arrObj(villages)
  },
  getVillagesOfDistrict: async districtId => {
    if (!districtId) return []
    const villages = await villageList
      .filter(village => village.district_id === districtId)
      .map(village => {
        village.name = uCase(village.name)
        return village
      })
    return villages
  },
  getVillagesOfDistrictId: async districtId => {
    return await indonesia.getVillagesOfDistrict(districtId)
  },
  getVillagesOfDistrictName: async districtName => {
    if (!districtName) return []
    const district = await indonesia.getDistrictByName(districtName)
    return await indonesia.getVillagesOfDistrictId(district.id)
  },
}

module.exports = indonesia
