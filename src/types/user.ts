import { Address } from "./address"

export type User = {
    userName?: string,
    phoneNumber?: string,
    email?: string,
    isAuthorized: boolean,
    address: Address
}