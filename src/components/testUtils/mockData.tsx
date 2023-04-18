export const mockAnnouncement = {
  id: "1111111",
  closingDate: new Date("2018-02-28T16:41:41.090Z"),
  creationDate: new Date("2018-02-28T16:41:41.090Z"),
  lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
  title: "Anouncement1",
  status: 1,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  idPet: "1111-1111-1111",
  pet: {
    id: "1111-1111-1111",
    name: "fifik1",
    species: "kotowaty",
    breed: "kot",
    birthday: new Date("2018-02-28T16:41:41.090Z"),
    photo:
      "https://preview.redd.it/9vpjwej8sopa1.png?width=640&crop=smart&auto=webp&v=enabled&s=89d8d1904862a0d40e86817306404d89a71d9cc6",
    shelterId: "1",
    shelter: {
      id: "1",
      fullShelterName: "Cute and Funny Shelter",
      phoneNumber: "928392322",
      email: "GimmeShelter@RS.com",
      address: {
        id: "2",
        street: "308 Negra Arroyo Lane",
        city: "Albuquerque",
        province: "New Mexico",
        postalCode: "87104",
        country: "United States of America",
      },
      addressId: "1",
      isAuthorized: true,
    },
  },
};

export const mockAddress = {
  id: "4232",
  street: "Szkolna",
  city: "Białystok",
  province: "Podlaskie",
  postalCode: "69-420",
  country: "Poland",
};

export const mockUser = {
  userName: "Amadeo",
  phoneNumber: "343232675",
  email: "somemail@mail.com",
  isAuthorized: true,
  address: mockAddress,
};

export const mockApplication = {
  id: "2137",
  dateOfApplication: new Date("2018-02-28T16:41:41.090Z"),
  isWithdrawed: false,
  lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
  user: mockUser,
  announcement: mockAnnouncement,
};
