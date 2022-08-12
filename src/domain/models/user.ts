import { Address } from "./address";
import { Contact } from "./contact";

export type UserID = string;
export type UserAddressTypes = "home" | "office" | "other";
export interface UserContact extends Contact {}
export interface UserAddress extends Address {
  isDefault: boolean;
  addressType: UserAddressTypes;
}
export type User = {
  id: UserID;
  firstName: string;
  lastName: string;
  addresses?: UserAddress[];
  contacts?: UserContact[];
};
