# Territories Indonesia
Territories of Indonesia

[![NPM Version](https://img.shields.io/npm/v/territories-indonesia.svg?maxAge=2592000)](https://www.npmjs.com/package/territories-indonesia)
[![NPM Downloads](https://img.shields.io/npm/dt/territories-indonesia.svg?maxAge=2592000)](https://www.npmjs.com/package/territories-indonesia)

## Installation
```js
$ npm install --save territories-indonesia
```

### Usage
```js
import indonesia from 'territories-indonesia'

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

// Get regency by provinceId
indonesia.getRegenciesOfProvince(31, function(res) {
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

// Get district by regencyId
indonesia.getDistrictsOfRegency(3171, function(res) {
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
```

## License
MIT © [Seorang Eksa](http://www.seorangeksa.com)