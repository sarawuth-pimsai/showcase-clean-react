import {
  District,
  Province,
  SubDistrict,
  ZipCode,
} from "@domain/models/address";
import { UserAddressTypes } from "@domain/models/user";

export type CreateUserDto = {
  firstName: string;
  lastName: string;
};
export type UpdateUserDto = {
  firstName: string;
  lastName: string;
};
export type UpdateUserAddressDto = {
  address: string;
  subDistrict: SubDistrict;
  district: District;
  province: Province;
  zipCode: ZipCode;
  isDefault: boolean;
  addressType: UserAddressTypes;
};
