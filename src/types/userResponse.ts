import { User } from "./user";

export type UserResponse = {
    adopters: User[];
    pageNumber: number;
    count: number;
};
