import { Announcement } from "../types/announcement";
import { Application } from "../types/application";
import { Pet } from "../types/pet";
import { User } from "../types/user";
import { Report } from "../types/report";

export const mockAddresses = [
  {
    id: "4231",
    street: "Szkolna",
    city: "Biełystok",
    province: "Podlaskie",
    postalCode: "69-420",
    country: "Poland",
  },
  {
    id: "4232",
    street: "Mazowiecka",
    city: "Warszawa",
    province: "Mazowieckie",
    postalCode: "60-420",
    country: "Poland",
  },
  {
    id: "4233",
    street: "Szkolniejsza",
    city: "Białystok",
    province: "Podlaskie",
    postalCode: "69-421",
    country: "Poland",
  },
];

export const mockUsers = [
    {
    id: "1",
    userName: "KononowiczKrzysztof",
    phoneNumber: "325232675",
    email: "warmianin@katolik.com",
    status: 0,
    address: mockAddresses[0],
  },
    {
    id: "2",
    userName: "Meksikano",
    phoneNumber: "343232675",
    email: "natret@bialystok.com",
    status: 0,
    address: mockAddresses[1],
  },
    {
    id: "3",
    userName: "MajorSuchek",
    phoneNumber: "343232675",
    email: "majorek@nitro.com",
    status: 0,
    address: mockAddresses[2],
  },
] as User[];

export const mockShelters = [
  {
    id: "1",
    fullShelterName: "Cute and Funny Shelter",
    phoneNumber: "928392322",
    email: "GimmeShelter@RS.com",
    address: mockAddresses[0],
    addressId: mockAddresses[0].id,
    isAuthorized: true,
  },
  {
    id: "2",
    fullShelterName: "Even Cuter and Funnier Shelter",
    phoneNumber: "928762322",
    email: "GimmeShelterer@RS.com",
    address: mockAddresses[1],
    addressId: mockAddresses[1].id,
    isAuthorized: true,
  },
  {
    id: "3",
    fullShelterName: "Kentucky Fried Chicken",
    phoneNumber: "929252322",
    email: "KFC@RS.com",
    address: mockAddresses[2],
    addressId: mockAddresses[2].id,
    isAuthorized: true,
  },
];

export const mockPets = [
  {
    id: "1111-1111-1111",
    name: "fifik1",
    sex: "Female",
    species: "kotowaty",
    breed: "kot",
    birthday: new Date("2018-02-28T16:41:41.090Z"),
    photoUrl:
      "https://preview.redd.it/9vpjwej8sopa1.png?width=640&crop=smart&auto=webp&v=enabled&s=89d8d1904862a0d40e86817306404d89a71d9cc6",
    description:
      "this is a mock pet, some test data to check working of the service",
    status: "active",
    shelter: mockShelters[0],
  },
  {
    id: "22111-1111-1111",
    name: "alex",
    sex: "Female",
    species: "pieski",
    breed: "piesek",
    birthday: new Date("2018-02-28T16:41:41.090Z"),
    photoUrl:
      "https://preview.redd.it/9vpjwej8sopa1.png?width=640&crop=smart&auto=webp&v=enabled&s=89d8d1904862a0d40e86817306404d89a71d9cc6",
    description:
      "this is a mock pet, some test data to check working of the service",
    status: "active",
    shelter: mockShelters[0],
  },
  {
    id: "33111-1111-1111",
    name: "borys",
    sex: "Male",
    species: "maupa",
    breed: "szympans",
    birthday: new Date("2018-02-28T16:41:41.090Z"),
    photoUrl:
      "https://preview.redd.it/9vpjwej8sopa1.png?width=640&crop=smart&auto=webp&v=enabled&s=89d8d1904862a0d40e86817306404d89a71d9cc6",
    description:
      "this is a mock pet, some test data to check working of the service",
    status: "active",
    shelter: mockShelters[2],
  },
] as Pet[];

export const mockAnnouncements = [
  {
    id: "1111111",
    closingDate: new Date("2018-02-28T16:41:41.090Z"),
    creationDate: new Date("2018-02-28T16:41:41.090Z"),
    lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
    title: "Anouncement1",
    status: "Open",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pet: mockPets[0],
  },
  {
    id: "33333333",
    closingDate: new Date("2018-02-28T16:41:41.090Z"),
    creationDate: new Date("2018-02-28T16:41:41.090Z"),
    lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
    title: "Anouncement1",
    status: "Open",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pet: mockPets[1],
  },
  {
    id: "333333",
    closingDate: new Date("2018-02-28T16:41:41.090Z"),
    creationDate: new Date("2018-02-28T16:41:41.090Z"),
    lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
    title: "Anouncement1",
    status: "Open",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pet: mockPets[2],
  },
] as Announcement[];

export const mockApplications = [
  {
    id: "2137",
    creationDate: new Date("2018-02-28T16:41:41.090Z"),
    lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
    adopter: mockUsers[0],
    announcementId: mockAnnouncements[0].id,
    announcement: mockAnnouncements[0],
  },
  {
    id: "2138",
    creationDate: new Date("2018-02-28T16:41:41.090Z"),
    lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
    adopter: mockUsers[1],
    announcementId: mockAnnouncements[1].id,
    announcement: mockAnnouncements[1],
  },
  {
    id: "2139",
    creationDate: new Date("2018-02-28T16:41:41.090Z"),
    lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
    adopter: mockUsers[2],
    announcementId: mockAnnouncements[2].id,
    announcement: mockAnnouncements[2],
  },
] as Application[];

export const mockReports = [
    {
        id: "1",
        reason: "He tormented his cat",
        adopterId: mockUsers[0].id,
        announcementId: null,
        shelterId: null,
    },
    {
        id: "2",
        reason: "This announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dogThis announcement is for a non existing dog",
        announcementId: mockAnnouncements[0].id,
        shelterId: mockShelters[0].id,
        adopterId: null,
    },
    {
        id: "3",
        message: "This shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animalsThis shelter seems to neglect their animals",
        reportType:"shelter",
        targetId: mockShelters[1].id,
        state: "new",
    },
] as Report[];
