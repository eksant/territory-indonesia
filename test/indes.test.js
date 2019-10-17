const chai = require('chai')
const teritory = require('../index')

chai.should()

describe('Teritory Indonesia', () => {
  describe('1. Provinces', () => {
    it('Should be have more than one provinces', () => {
      teritory
        .getAllProvinces()
        .then(res => res.should.have.lengthOf(34))
        .catch(err => console.log(err))
    })
    it('Should be equal DKI Jakarta when filter by ID = 31', () => {
      teritory
        .getProvinceById('31')
        .then(res => res.name.should.equal('DKI Jakarta'))
        .catch(err => console.log(err))
    })
    it('Should be equal DKI Jakarta when filter by name = DKI Jakarta', () => {
      teritory
        .getProvinceByName('DKI Jakarta')
        .then(res => res.name.should.equal('DKI Jakarta'))
        .catch(err => console.log(err))
    })
  })

  describe('2. Regencies', () => {
    it('Should be have more than one regencies', () => {
      teritory
        .getAllRegencies()
        .then(res => res.should.have.lengthOf(514))
        .catch(err => console.log(err))
    })
    it('Should be equal Kota Jakarta Selatan when filter by ID = 3171', () => {
      teritory
        .getRegencyById('3171')
        .then(res => res.name.should.equal('Kota Jakarta Selatan'))
        .catch(err => console.log(err))
    })
    it('Should be equal Kota Jakarta Selatan when filter by name = Kota Jakarta Selatan', () => {
      teritory
        .getRegencyByName('Kota Jakarta Selatan')
        .then(res => res.name.should.equal('Kota Jakarta Selatan'))
        .catch(err => console.log(err))
    })
    it('Should be have more than one regencies when filter by province ID = 31', () => {
      teritory
        .getRegenciesOfProvinceId('31')
        .then(res => res.should.have.lengthOf(6))
        .catch(err => console.log(err))
    })
    it('Should be have more than one regencies when filter by province name = DKI Jakarta', () => {
      teritory
        .getRegenciesOfProvinceName('DKI Jakarta')
        .then(res => res.should.have.lengthOf(6))
        .catch(err => console.log(err))
    })
  })

  describe('3. Districts', () => {
    it('Should be have more than one district', () => {
      teritory
        .getAllDistricts()
        .then(res => res.should.have.lengthOf(7071))
        .catch(err => console.log(err))
    })
    it('Should be equal Tebet when filter by ID = 3171090', () => {
      teritory
        .getDistrictById('3171090')
        .then(res => res.name.should.equal('Tebet'))
        .catch(err => console.log(err))
    })
    it('Should be equal Tebet when filter by name = Tebet', () => {
      teritory
        .getDistrictByName('Tebet')
        .then(res => res.name.should.equal('Tebet'))
        .catch(err => console.log(err))
    })
    it('Should be have more than one regencies when filter by regency ID = 3171', () => {
      teritory
        .getDistrictsOfRegencyId('3171')
        .then(res => res.should.have.lengthOf(10))
        .catch(err => console.log(err))
    })
    it('Should be have more than one regencies when filter by regency name = Kota Jakarta Selatan', () => {
      teritory
        .getDistrictsOfRegencyName('Kota Jakarta Selatan')
        .then(res => res.should.have.lengthOf(10))
        .catch(err => console.log(err))
    })
  })

  describe('4. Villages', () => {
    it('Should be have more than one villages', () => {
      teritory
        .getAllVillages()
        .then(res => res.should.have.lengthOf(81935))
        .catch(err => console.log(err))
    })
    it('Should be equal Tebet Barat when filter by ID = 3171090002', () => {
      teritory
        .getVillageById('3171090002')
        .then(res => res.name.should.equal('Tebet Barat'))
        .catch(err => console.log(err))
    })
    it('Should be equal Tebet Barat when filter by name = Tebet Barat', () => {
      teritory
        .getVillageByName('Tebet Barat')
        .then(res => res.name.should.equal('Tebet Barat'))
        .catch(err => console.log(err))
    })
    it('Should be have more than one villages when filter by district ID = 3171090', () => {
      teritory
        .getVillagesOfDistrictId('3171090')
        .then(res => res.should.have.lengthOf(7))
        .catch(err => console.log(err))
    })
    it('Should be have more than one villages when filter by district name = Tebet', () => {
      teritory
        .getVillagesOfDistrictName('Tebet')
        .then(res => res.should.have.lengthOf(7))
        .catch(err => console.log(err))
    })
  })
})
