'use strict'

const province = require('./src/province')
const regency = require('./src/regency')
const district = require('./src/district')
const village = require('./src/village')

const indonesia = {
  // provinces
  getAllProvinces: province.getAllProvinces,
  getProvinceById: province.getProvinceById,
  getProvinceByName: province.getProvinceByName,

  // regency
  getAllRegencies: regency.getAllRegencies,
  getRegencyById: regency.getRegencyById,
  getRegencyByName: regency.getRegencyByName,
  getRegenciesOfProvince: regency.getRegenciesOfProvince,
  getRegenciesOfProvinceId: regency.getRegenciesOfProvinceId,
  getRegenciesOfProvinceName: regency.getRegenciesOfProvinceName,

  // district
  getAllDistricts: district.getAllDistricts,
  getDistrictById: district.getDistrictById,
  getDistrictByName: district.getDistrictByName,
  getDistrictsOfRegency: district.getDistrictsOfRegency,
  getDistrictsOfRegencyId: district.getDistrictsOfRegencyId,
  getDistrictsOfRegencyName: district.getDistrictsOfRegencyName,

  // village
  getAllVillages: village.getAllVillages,
  getVillageById: village.getVillageById,
  getVillageByName: village.getVillageByName,
  getVillagesOfDistrict: village.getVillagesOfDistrict,
  getVillagesOfDistrictId: village.getVillagesOfDistrictId,
  getVillagesOfDistrictName: village.getVillagesOfDistrictName,
}

module.exports = indonesia
