import { NewAddress } from "./newAddress";

export type NewShelter = {
    userName?: string;
    fullShelterName?: string;
    phoneNumber?: string;
    email?: string;
    address?: NewAddress;
};