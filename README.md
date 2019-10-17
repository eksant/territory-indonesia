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
indonesia
  .getAllProvinces()
  .then(res => console.log(res))
  .catch(err => console.log(err))

// Get province by id
indonesia
  .getProvinceById('31')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// result :
// {
//   "id": "31",
//   "name": "DKI JAKARTA",
//   "alt_name": "DKI JAKARTA",
//   "latitude": 6.1745,
//   "longitude": 106.8227
// },

// Get all regencies
indonesia
  .getAllRegencies(31)
  .then(res => console.log(res))
  .catch(err => console.log(err))

// Get regency by id
indonesia
  .getRegencyById('3171')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// result :
// {
//   "id": "3171",
//   "province_id": "31",
//   "name": "KOTA JAKARTA SELATAN",
//   "alt_name": "KOTA JAKARTA SELATAN",
//   "latitude": -6.266,
//   "longitude": 106.8135
// },

// Get regencies by name
indonesia
  .getRegencyByName('Kota Jakarta Selatan')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// Get regencies by province id
indonesia
  .getRegenciesOfProvinceId('31')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// Get regencies by province name
indonesia
  .getRegenciesOfProvinceName('DKI Jakarta')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// result :
// [
//  {
//   "id": "3171",
//   "province_id": "31",
//   "name": "KOTA JAKARTA SELATAN",
//   "alt_name": "KOTA JAKARTA SELATAN",
//   "latitude": -6.266,
//   "longitude": 106.8135
//  },
//  {
//    .....
//  }
// ],

// Get all districts
indonesia
  .getAllDistricts()
  .then(res => console.log(res))
  .catch(err => console.log(err))

// Get district by id
indonesia
  .getDistrictById('3171090')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// result :
// {
//   "id": "3171090",
//   "regency_id": "3171",
//   "name": "TEBET",
//   "alt_name": "Tebet, South Jakarta City, Special Capital Region of Jakarta, Indonesia",
//   "latitude": -6.23186,
//   "longitude": 106.84734
// },

// Get district by name
indonesia
  .getDistrictByName('Tebet')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// Get district by regencyId
indonesia
  .getDistrictsOfRegencyId('3171')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// result :
// {
//   "id": "3171090",
//   "regency_id": "3171",
//   "name": "TEBET",
//   "alt_name": "Tebet, South Jakarta City, Special Capital Region of Jakarta, Indonesia",
//   "latitude": -6.23186,
//   "longitude": 106.84734
// },

// Get all villages
indonesia
  .getAllVillages()
  .then(res => console.log(res))
  .catch(err => console.log(err))

// Get village by id
indonesia
  .getVillageById('3171090002')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// Get village by name
indonesia
  .getVillageByName('Tebet Barat')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// Get village by districtId
indonesia
  .getVillagesOfDistrictId('3171090')
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

## License

License - see the [LICENSE](LICENSE) file for details
