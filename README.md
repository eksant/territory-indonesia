# Territory Indonesia

Territories of Indonesia

[![NPM Version](https://img.shields.io/npm/v/territory-indonesia.svg?maxAge=2592000)](https://www.npmjs.com/package/territory-indonesia)
[![NPM Downloads](https://img.shields.io/npm/dt/territory-indonesia.svg?maxAge=2592000)](https://www.npmjs.com/package/territory-indonesia)

## Installation

```bash
$ npm install territory-indonesia
or
$ yarn add territory-indonesia
```

### Usage

```js
import indonesia from 'territory-indonesia'

// Get all provinces
indonesia.getAllProvinces(function(res) {
  console.log(res)
})

// Get province by id
indonesia.getProvinceById(31, function(res) {
  // {
  //   "id": "31",
  //   "name": "DKI JAKARTA",
  //   "alt_name": "DKI JAKARTA",
  //   "latitude": 6.1745,
  //   "longitude": 106.8227
  // },
  console.log(res)
})

// Get all regencies
indonesia.getAllRegencies(function(res) {
  console.log(res)
})

// Get regency by id
indonesia.getRegencyById(3171, function(res) {
  // {
  //   "id": "3171",
  //   "province_id": "31",
  //   "name": "KOTA JAKARTA SELATAN",
  //   "alt_name": "KOTA JAKARTA SELATAN",
  //   "latitude": -6.266,
  //   "longitude": 106.8135
  // },
  console.log(res)
})

// Get regencies by name
indonesia.getRegencyByName(name, function(res) {
  console.log(res)
})

// Get regency by provinceId
indonesia.getRegenciesOfProvinceId(31, function(res) {
  // [{....}, {
  //   "id": "3171",
  //   "province_id": "31",
  //   "name": "KOTA JAKARTA SELATAN",
  //   "alt_name": "KOTA JAKARTA SELATAN",
  //   "latitude": -6.266,
  //   "longitude": 106.8135
  // }],
  console.log(res)
})

// Get all districts
indonesia.getAllDistricts(function(res) {
  console.log(res)
})

// Get district by id
indonesia.getDistrictById(3171090, function(res) {
  // {
  //   "id": "3171090",
  //   "regency_id": "3171",
  //   "name": "TEBET",
  //   "alt_name": "Tebet, South Jakarta City, Special Capital Region of Jakarta, Indonesia",
  //   "latitude": -6.23186,
  //   "longitude": 106.84734
  // },
  console.log(res)
})

// Get district by name
indonesia.getDistrictByName('Tebet', function(res) {
  console.log(res)
})

// Get district by regencyId
indonesia.getDistrictsOfRegencyId(3171, function(res) {
  // {
  //   "id": "3171090",
  //   "regency_id": "3171",
  //   "name": "TEBET",
  //   "alt_name": "Tebet, South Jakarta City, Special Capital Region of Jakarta, Indonesia",
  //   "latitude": -6.23186,
  //   "longitude": 106.84734
  // },
  console.log(res)
})

// Get all villages
indonesia.getAllVillages(function(res) {
  console.log(res)
})

// Get village by id
indonesia.getVillageById(3171090002, function(res) {
  console.log(res)
})

// Get village by name
indonesia.getVillageByName('Tebet Barat', function(res) {
  console.log(res)
})

// Get village by districtId
indonesia.getVillagesOfDistrictId(3171090, function(res) {
  console.log(res)
})
```

## License

This project is licensed under [Eko Santoso](http://seorangeksa.com) License - see the [LICENSE](LICENSE) file for details
