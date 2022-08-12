export type AddressID = string;
export type SubDistrictID = string;
export type DistrictID = string;
export type ProvinceID = string;
export type ZipCode = string;
export type SubDistrict = {
  id: SubDistrictID;
  name: string;
};
export type District = {
  id: DistrictID;
  name: string;
};
export type Province = {
  id: ProvinceID;
  name: string;
};
export type Address = {
  id: AddressID;
  address: string;
  subDistrict: SubDistrict;
  district: District;
  province: Province;
  zipCode: ZipCode;
};
